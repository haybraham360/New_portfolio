"use client";

import { useEffect } from "react";
import { useToast } from "./toast-provider";

const GREETED_KEY = "greeted";

/**
 * One gentle hello per browser session, shown only once the visitor has scrolled to the projects —
 * never on page load, and never again after it's been seen.
 */
export function Greeting({ targetId }: { targetId: string }) {
  const notify = useToast();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(GREETED_KEY)) return;
    } catch {
      return; // Without storage we can't guarantee "once", so skip it.
    }
    const target = document.getElementById(targetId);
    if (!target) return;

    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          try {
            sessionStorage.setItem(GREETED_KEY, "1");
          } catch {}
          const hasKeyboard = window.matchMedia("(pointer: fine)").matches;
          notify({
            tone: "info",
            title: "Thanks for stopping by",
            body: hasKeyboard
              ? "Each project links to its live site. Press ? for keyboard shortcuts."
              : "Each project links to its live site.",
          });
        }, 1200);
      },
      { threshold: 0.25 },
    );
    observer.observe(target);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [notify, targetId]);

  return null;
}
