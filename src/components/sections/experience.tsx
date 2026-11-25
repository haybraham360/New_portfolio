import { ChevronDown } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { earlierExperience, experience, type Role } from "@/content/experience";

function RoleItem({ role }: { role: Role }) {
  return (
    <li className="relative grid gap-1 pb-9 pl-6 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:pl-0">
      {/* Timeline rail + node (mobile on the left edge, desktop between date and content) */}
      <span aria-hidden="true" className="absolute top-2 bottom-0 left-[5px] w-[3px] bg-ink sm:left-[calc(10rem+0.75rem-1px)]" />
      <span
        aria-hidden="true"
        className="absolute top-[0.35rem] left-0 size-[13px] border-2 border-ink bg-card-yellow sm:left-[calc(10rem+0.75rem-6px)]"
      />
      <p className="font-mono text-mono-xs font-semibold text-fg-subtle sm:pt-1">{role.period}</p>
      <div className="sm:pl-6">
        <h3 className="font-display text-lg leading-snug text-fg">
          {role.title} <span className="text-fg-subtle">·</span> <span className="text-accent">{role.org}</span>
        </h3>
        {role.location && <p className="text-sm text-fg-subtle">{role.location}</p>}
        {role.highlights.length > 0 && (
          <ul className="mt-2.5 max-w-prose space-y-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">
            {role.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-[var(--swoosh)]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="Experience" count={experience.length} intro="Where I've been building, most recent first.">
      <ol>
        {experience.map((role) => (
          <RoleItem key={`${role.org}-${role.period}`} role={role} />
        ))}
      </ol>

      <details className="brut reveal group mt-12 bg-surface">
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-display text-base text-fg transition-colors select-none hover:bg-card-yellow [&::-webkit-details-marker]:hidden">
          Earlier experience outside software
          <ChevronDown size={16} className="shrink-0 transition-transform duration-200 group-open:rotate-180" />
        </summary>
        <ol className="space-y-5 px-5 pt-2 pb-5">
          {earlierExperience.map((role) => (
            <li key={role.org} className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <p className="font-mono text-mono-xs font-normal text-fg-subtle sm:pt-1">{role.period}</p>
              <div>
                <h3 className="text-[0.9375rem] font-medium text-fg">
                  {role.title} <span className="text-fg-subtle">·</span>{" "}
                  <span className="text-fg-muted">{role.org}</span>
                </h3>
                {role.highlights.map((h) => (
                  <p key={h} className="mt-1 text-sm leading-relaxed text-fg-muted">
                    {h}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </details>
    </Section>
  );
}
