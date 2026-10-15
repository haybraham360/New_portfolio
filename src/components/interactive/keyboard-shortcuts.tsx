"use client";

import { useCallback, useEffect, useState } from "react";
import { Close } from "@/components/ui/icons";
import { getTheme, prefersReducedMotion, setTheme } from "@/lib/theme";
import { useToast } from "./toast-provider";
import { useCopyEmail } from "./use-copy-email";

export const OPEN_SHORTCUTS_EVENT = "portfolio:open-shortcuts";

const DISABLED_KEY = "shortcuts-disabled";
const DISCOVERED_KEY = "shortcuts-discovered";

const shortcuts = [
  { key: "P", action: "Jump to projects" },
  { key: "C", action: "Jump to contact" },
  { key: "E", action: "Copy email address" },
  { key: "T", action: "Switch day / night theme" },
  { key: "?", action: "Show or hide this list" },
] as const;

function readFlag(storage: "local" | "session", key: string) {
  try {
    return (storage === "local" ? localStorage : sessionStorage).getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeFlag(storage: "local" | "session", key: string, on: boolean) {
  try {
    const s = storage === "local" ? localStorage : sessionStorage;
    if (on) s.setItem(key, "1");
    else s.removeItem(key);
  } catch {
    // Storage unavailable: the setting lasts for this page view only.
  }
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
}

function flashKeyHint(key: string) {
  document.querySelectorAll<HTMLElement>(`[data-key-hint="${key}"]`).forEach((el) => {
    el.classList.add("key-flash");
    window.setTimeout(() => el.classList.remove("key-flash"), 150);
  });
}

export function jumpToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;
  section.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  // Move focus too, so keyboard and screen-reader users continue from the new position.
  section.setAttribute("tabindex", "-1");
  section.focus({ preventScroll: true });
  history.replaceState(null, "", `#${id}`);
}

/**
 * Single-key shortcuts (P, C, E, T, ?) shown as key hints on buttons. They are ignored while typing
 * or when a modifier is held, and can be switched off from the help panel (WCAG 2.1.4).
 */
export function KeyboardShortcuts() {
  const notify = useToast();
  const copyEmail = useCopyEmail();
  const [helpOpen, setHelpOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // Sync the persisted preference after hydration; the server can't know it.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisabled(readFlag("local", DISABLED_KEY));
  }, []);

  const toggleDisabled = () => {
    const next = !disabled;
    setDisabled(next);
    writeFlag("local", DISABLED_KEY, next);
  };

  const announceDiscovery = useCallback(() => {
    if (readFlag("session", DISCOVERED_KEY)) return;
    writeFlag("session", DISCOVERED_KEY, true);
    notify({ tone: "info", title: "You found the keyboard shortcuts", body: "Press ? to see them all." });
  }, [notify]);

  useEffect(() => {
    const openHelp = () => setHelpOpen(true);
    window.addEventListener(OPEN_SHORTCUTS_EVENT, openHelp);
    return () => window.removeEventListener(OPEN_SHORTCUTS_EVENT, openHelp);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && helpOpen) {
        setHelpOpen(false);
        return;
      }
      if (disabled || e.defaultPrevented || e.repeat) return;
      if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return;

      const key = e.key.toLowerCase();
      const actions: Record<string, () => void> = {
        p: () => jumpToSection("projects"),
        c: () => jumpToSection("contact"),
        e: () => void copyEmail(),
        t: () => setTheme(getTheme() === "dark" ? "light" : "dark"),
        "?": () => setHelpOpen((open) => !open),
      };
      const action = actions[key];
      if (!action) return;

      e.preventDefault();
      flashKeyHint(key);
      action();
      if (key !== "?") announceDiscovery();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [disabled, helpOpen, copyEmail, announceDiscovery]);

  if (!helpOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="shortcuts-title"
      className="toast-in fixed bottom-6 left-6 z-50 hidden w-80 rounded-card border border-line bg-surface p-5 shadow-toast pointer-fine:block"
    >
      <div className="flex items-center justify-between">
        <h2 id="shortcuts-title" className="text-label text-fg-subtle uppercase">
          Keyboard shortcuts
        </h2>
        <button
          type="button"
          onClick={() => setHelpOpen(false)}
          aria-label="Close keyboard shortcuts"
          className="-mr-2 inline-flex size-9 items-center justify-center rounded-full text-fg-subtle hover:bg-surface-muted hover:text-fg"
        >
          <Close size={14} />
        </button>
      </div>
      <dl className="mt-4 space-y-2.5">
        {shortcuts.map((s) => (
          <div key={s.key} className="flex items-center gap-3 text-sm">
            <dt>
              <kbd className="inline-flex size-6 items-center justify-center rounded-key border border-line bg-surface-muted font-mono text-mono-xs text-fg">
                {s.key}
              </kbd>
            </dt>
            <dd className="text-fg-muted">{s.action}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span id="shortcuts-toggle-label" className="text-fg-muted">
          Single-key shortcuts
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={!disabled}
          aria-labelledby="shortcuts-toggle-label"
          onClick={toggleDisabled}
          className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-line-strong bg-surface-muted transition-colors aria-checked:border-transparent aria-checked:bg-accent"
        >
          <span className="ml-0.5 size-4.5 rounded-full bg-surface shadow-sm transition-transform in-aria-checked:translate-x-5" />
        </button>
      </div>
      {disabled && <p className="mt-2 text-xs text-fg-subtle">Off. Use the footer link to turn them back on.</p>}
    </div>
  );
}
