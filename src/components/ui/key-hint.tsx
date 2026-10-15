import { cn } from "@/lib/cn";

/**
 * Keyboard-key hint shown inside buttons. Hidden on touch devices (no keyboard) and from
 * assistive tech — the shortcut itself is exposed via aria-keyshortcuts on the control.
 */
export function KeyHint({ k, className }: { k: string; className?: string }) {
  return (
    <kbd
      aria-hidden="true"
      data-key-hint={k.toLowerCase()}
      className={cn(
        "hidden size-[22px] items-center justify-center rounded-key border font-mono text-mono-xs transition-colors duration-150 pointer-fine:inline-flex",
        className,
      )}
    >
      {k.toUpperCase()}
    </kbd>
  );
}
