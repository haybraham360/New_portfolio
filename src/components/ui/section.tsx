import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  label: string;
  intro?: ReactNode;
  /** Optional tally shown as a black badge beside the heading, e.g. the number of projects. */
  count?: number;
  children: ReactNode;
  className?: string;
};

/** Retro poster rhythm: chunky display heading (+ count badge) → italic one-liner → content. */
export function Section({ id, label, intro, count, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("section-enter py-14 sm:py-20", className)}>
      <div className="flex flex-wrap items-center gap-4">
        <h2 id={headingId} data-type="heading" className="font-display text-[clamp(1.875rem,3vw+1rem,2.75rem)] leading-[1.05] text-fg">
          {label}
        </h2>
        {count !== undefined && (
          <span className="inline-flex h-10 min-w-10 items-center justify-center bg-btn px-2.5 font-display text-lg text-btn-fg">
            {count}
            <span className="sr-only"> items</span>
          </span>
        )}
      </div>
      {intro && <p className="mt-3 max-w-prose text-lead text-fg-muted italic">{intro}</p>}
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
