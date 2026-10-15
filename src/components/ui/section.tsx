import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  label: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Section rhythm from the reference: small uppercase label → one-line mono intro → content. */
export function Section({ id, label, intro, children, className }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("section-enter py-16 sm:py-24", className)}>
      <h2 id={headingId} className="text-label uppercase text-fg-subtle">
        {label}
      </h2>
      {intro && <p className="mt-4 max-w-prose font-mono text-lead text-fg">{intro}</p>}
      <div className="mt-8 sm:mt-10">{children}</div>
    </section>
  );
}
