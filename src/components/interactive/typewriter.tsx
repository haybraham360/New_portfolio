"use client";

import { useEffect } from "react";
import { TYPED_KEY, TYPING_CLASS } from "@/lib/typing";

/** Delay per character (ms) for each kind of typed element; longer copy types faster. */
const SPEED: Record<string, number> = { badge: 18, title: 45, lead: 12, body: 4, heading: 28 };

type Job = { root: HTMLElement; nodes: { node: Text; text: string }[]; hidden: HTMLElement[]; done: boolean };

const wait = (ms: number) => new Promise((r) => window.setTimeout(r, ms));

/** Empties every text node under `root` (keeping its markup) and hides child elements until typing reaches them. */
function prepare(root: HTMLElement): Job {
  // Work out what to hide before emptying, while elements still have their text.
  const hidden = [...root.querySelectorAll<HTMLElement>("*")].filter((el) => el.textContent?.trim());
  // A heading's count badge sits beside it; keep it back until the heading is typed.
  const badge = root.dataset.type === "heading" ? root.nextElementSibling : null;
  if (badge instanceof HTMLElement) hidden.push(badge);
  const nodes: Job["nodes"] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const node = n as Text;
    if (!node.data) continue;
    // Collapse source-formatting whitespace so the typing doesn't stall on runs of spaces.
    nodes.push({ node, text: node.data.replace(/\s+/g, " ") });
    node.data = "";
  }
  hidden.forEach((el) => (el.style.visibility = "hidden"));
  root.setAttribute("aria-busy", "true");
  return { root, nodes, hidden, done: false };
}

function finish(job: Job) {
  if (job.done) return;
  job.done = true;
  job.nodes.forEach(({ node, text }) => (node.data = text));
  job.hidden.forEach((el) => (el.style.visibility = ""));
  job.root.removeAttribute("aria-busy");
}

function makeCaret() {
  const caret = document.createElement("span");
  caret.className = "type-caret";
  caret.setAttribute("aria-hidden", "true");
  return caret;
}

/**
 * Typewriter intro: the hero types itself out character by character behind a blinking caret, then the
 * buttons and card pop in; each section heading types itself the first time it scrolls into view.
 * Any key press, click or tap during the intro skips straight to the finished page.
 */
export function Typewriter() {
  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains(TYPING_CLASS)) return;

    let cancelled = false;
    let skipped = false;
    let observer: IntersectionObserver | undefined;
    const jobs: Job[] = [];
    const carets = new Set<HTMLElement>();
    let reveals: HTMLElement[] = [];

    const showReveals = (animate: boolean) =>
      reveals.forEach((el, i) => {
        el.style.visibility = "";
        if (!animate) return;
        el.style.animationDelay = `${i * 120}ms`;
        el.classList.add("type-pop");
      });

    const type = async (job: Job, caret: HTMLElement) => {
      const speed = SPEED[job.root.dataset.type ?? "body"] ?? 10;
      for (const { node, text } of job.nodes) {
        // Reveal the element chain (e.g. a tech chip) this text lives in as typing reaches it.
        for (let el = node.parentElement; el && el !== job.root; el = el.parentElement) el.style.visibility = "";
        node.after(caret);
        for (let i = 1; i <= text.length; i++) {
          if (skipped || cancelled || job.done) return;
          node.data = text.slice(0, i);
          // Random jitter plus a beat after punctuation reads like a real person typing.
          await wait(speed * (0.5 + Math.random()) + (/[.,:—]/.test(text[i - 1]) ? speed * 4 : 0));
        }
      }
      finish(job);
    };

    /** Types a job with its own caret, leaving the caret blinking at the end for `linger` ms. */
    const typeWithCaret = async (job: Job, linger: number) => {
      const caret = makeCaret();
      carets.add(caret);
      await type(job, caret);
      if (!skipped && !cancelled) {
        job.root.append(caret);
        await wait(linger);
      }
      caret.remove();
      carets.delete(caret);
    };

    const skipAll = () => {
      if (skipped) return;
      skipped = true;
      jobs.forEach(finish);
      showReveals(false);
      carets.forEach((c) => c.remove());
      observer?.disconnect();
      removeSkipListeners();
    };
    const removeSkipListeners = () => {
      window.removeEventListener("keydown", skipAll);
      window.removeEventListener("pointerdown", skipAll);
    };

    // Deferred a tick so React Strict Mode's mount → unmount → mount in dev doesn't cancel the intro.
    const start = window.setTimeout(async () => {
      try {
        sessionStorage.setItem(TYPED_KEY, "1");
      } catch {}

      const hero = document.getElementById("top");
      const heroJobs = [...(hero?.querySelectorAll<HTMLElement>("[data-type]") ?? [])].map(prepare);
      const headingJobs = [...document.querySelectorAll<HTMLElement>('[data-type="heading"]')].map(prepare);
      jobs.push(...heroJobs, ...headingJobs);
      reveals = [...(hero?.querySelectorAll<HTMLElement>("[data-type-reveal]") ?? [])];
      reveals.forEach((el) => (el.style.visibility = "hidden"));
      // The text is emptied now, so the CSS that hid it before hydration can go.
      html.classList.remove(TYPING_CLASS);

      window.addEventListener("keydown", skipAll);
      window.addEventListener("pointerdown", skipAll);

      // Headings type when scrolled into view, but only once the hero intro is finished.
      let heroDone = false;
      const queued: Job[] = [];
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            observer?.unobserve(entry.target);
            const job = headingJobs.find((j) => j.root === entry.target);
            if (!job) continue;
            if (heroDone) void typeWithCaret(job, 700);
            else queued.push(job);
          }
        },
        { rootMargin: "0px 0px -15% 0px" },
      );
      headingJobs.forEach((job) => observer?.observe(job.root));

      // Arriving on a deep link (e.g. /#contact) means the hero is off-screen: skip its intro.
      const deepLinked = location.hash && location.hash !== "#top";
      if (deepLinked) {
        heroJobs.forEach(finish);
        showReveals(false);
      } else {
        await wait(150);
        const caret = makeCaret();
        carets.add(caret);
        for (const job of heroJobs) {
          if (skipped || cancelled) return;
          await type(job, caret);
          await wait(job.root.dataset.type === "title" ? 200 : 80);
        }
        if (skipped || cancelled) return;
        // Replay the name underline now that the name is on screen.
        hero?.querySelectorAll(".name-underline").forEach((el) => el.classList.add("underline-redraw"));
        showReveals(true);
        // Park the caret after the title for a moment before handing over to the headings.
        hero?.querySelector('[data-type="title"]')?.append(caret);
        await wait(900);
        caret.remove();
        carets.delete(caret);
        if (skipped || cancelled) return;
      }

      heroDone = true;
      removeSkipListeners();
      for (const job of queued.splice(0)) await typeWithCaret(job, 500);
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      observer?.disconnect();
      removeSkipListeners();
      jobs.forEach(finish);
      showReveals(false);
      carets.forEach((c) => c.remove());
    };
  }, []);

  return null;
}
