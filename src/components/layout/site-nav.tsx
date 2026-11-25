"use client";

import { useEffect, useRef, useState } from "react";
import { Close, Menu } from "@/components/ui/icons";
import { navSections, type SectionId } from "@/content/profile";
import { cn } from "@/lib/cn";

/** Tracks which section is currently in view so the nav can reflect the reader's position. */
function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        const order = navSections.map((s) => s.id as string);
        const current = order.find((id) => visible.has(id));
        setActive((current as SectionId | undefined) ?? null);
      },
      // A band across the upper-middle of the viewport decides the "current" section.
      { rootMargin: "-30% 0px -55% 0px" },
    );
    for (const { id } of navSections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function NavLinks() {
  const active = useActiveSection();
  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {navSections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className="relative inline-flex h-11 items-center px-3 text-base font-bold text-fg transition-colors hover:text-accent"
            >
              {label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-3 bottom-1.5 h-1 origin-left rounded-full bg-[var(--swoosh)] transition-transform duration-200",
                  active === id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Disclosure-style menu for small screens: no focus trap needed because it doesn't cover the page. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="brut-sm brut-press inline-flex size-11 items-center justify-center bg-surface text-fg"
      >
        {open ? <Close size={20} /> : <Menu size={20} />}
      </button>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-3 border-ink bg-bg"
      >
        <ul className="mx-auto flex max-w-page flex-col px-4 py-3 sm:px-6">
          {navSections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center px-3 font-display text-lg text-fg transition-colors hover:bg-card-yellow"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
