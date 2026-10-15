"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/ui/icons";
import { getTheme, setTheme, subscribeToTheme } from "@/lib/theme";

export function ThemeToggle() {
  // null on the server: the real theme is only known after the inline script has run.
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => null);
  const next = theme === "dark" ? "light" : "dark";
  const label = theme === null ? "Toggle theme" : `Switch to ${next === "dark" ? "night" : "day"} theme`;

  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTheme(next, { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={label}
      aria-keyshortcuts="T"
      title={`${label} (T)`}
      className="group relative inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg"
    >
      <Sun
        size={18}
        className="absolute transition-[rotate,scale,opacity] duration-200 dark:scale-50 dark:-rotate-90 dark:opacity-0"
      />
      <Moon
        size={18}
        className="absolute scale-50 rotate-90 opacity-0 transition-[rotate,scale,opacity] duration-200 dark:scale-100 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
}
