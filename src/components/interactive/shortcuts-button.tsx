"use client";

import { Keyboard } from "@/components/ui/icons";
import { OPEN_SHORTCUTS_EVENT } from "./keyboard-shortcuts";

/** Opens the shortcut list; only shown on devices with a precise pointer (i.e. likely a keyboard). */
export function ShortcutsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SHORTCUTS_EVENT))}
      aria-label="Keyboard shortcuts"
      aria-keyshortcuts="Shift+/"
      title="Keyboard shortcuts (?)"
      className="hidden size-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg pointer-fine:inline-flex"
    >
      <Keyboard size={18} />
    </button>
  );
}
