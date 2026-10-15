"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Check, Close, Sparkle } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Tone = "success" | "info" | "error";
type ToastInput = { tone: Tone; title: string; body?: string };
type ToastItem = ToastInput & { id: number };

const MAX_VISIBLE = 2;
const AUTO_DISMISS_MS = 4500;

const ToastContext = createContext<((toast: ToastInput) => void) | null>(null);

export function useToast() {
  const notify = useContext(ToastContext);
  if (!notify) throw new Error("useToast must be used inside <ToastProvider>");
  return notify;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const dismiss = useCallback((id: number) => setToasts((all) => all.filter((t) => t.id !== id)), []);

  const notify = useCallback((toast: ToastInput) => {
    const id = ++nextId.current;
    setToasts((all) => [...all, { ...toast, id }].slice(-MAX_VISIBLE));
  }, []);

  const value = useMemo(() => notify, [notify]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Mounted from the start so screen readers register the live region before anything is announced. */}
      <section
        aria-label="Notifications"
        className="pointer-events-none fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex justify-center sm:inset-x-auto sm:right-6 sm:bottom-6 sm:justify-end"
      >
        <ol aria-live="polite" className="flex w-full flex-col gap-2 sm:w-[22rem]">
          {toasts.map((toast) => (
            <ToastCard key={toast.id} toast={toast} onDismiss={dismiss} />
          ))}
        </ol>
      </section>
    </ToastContext.Provider>
  );
}

const toneStyles: Record<Tone, { icon: ReactNode; className: string }> = {
  success: { icon: <Check size={14} />, className: "bg-success-bg text-success" },
  info: { icon: <Sparkle size={14} />, className: "bg-surface-tint text-accent-on-tint" },
  error: { icon: <Close size={14} />, className: "bg-danger-bg text-danger" },
};

function ToastCard({ toast, onDismiss }: { toast: ToastItem; onDismiss: (id: number) => void }) {
  const { id } = toast;
  const [paused, setPaused] = useState(false);
  const persistent = toast.tone === "error";

  useEffect(() => {
    if (persistent || paused) return;
    const timer = window.setTimeout(() => onDismiss(id), AUTO_DISMISS_MS);
    return () => window.clearTimeout(timer);
  }, [persistent, paused, onDismiss, id]);

  const tone = toneStyles[toast.tone];

  return (
    <li
      role={persistent ? "alert" : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => e.key === "Escape" && onDismiss(id)}
      className="toast-in pointer-events-auto flex items-start gap-3 rounded-card border border-line bg-surface p-3.5 shadow-toast"
    >
      <span className={cn("mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full", tone.className)}>
        {tone.icon}
      </span>
      <div className="min-w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-fg">{toast.title}</p>
        {toast.body && <p className="mt-0.5 font-mono text-xs leading-relaxed wrap-break-word text-fg-muted">{toast.body}</p>}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss notification"
        className="-m-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full text-fg-subtle transition-colors hover:bg-surface-muted hover:text-fg"
      >
        <Close size={14} />
      </button>
    </li>
  );
}
