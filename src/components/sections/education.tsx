import { Section } from "@/components/ui/section";
import { certifications, education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="rounded-card border border-line bg-surface p-5">
            <p className="flex flex-wrap items-center gap-2 font-mono text-mono-xs font-normal text-fg-subtle">
              {item.period}
              {"note" in item && (
                <span className="rounded-full bg-surface-tint px-2 py-0.5 font-medium text-accent-on-tint">{item.note}</span>
              )}
            </p>
            <h3 className="mt-2 font-mono text-title text-fg">{item.degree}</h3>
            <p className="mt-0.5 text-sm text-fg-muted">{item.school}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h3 className="text-sm text-fg-subtle">Certifications</h3>
        <ul className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <li key={c} className="rounded-full bg-surface-muted px-3.5 py-1.5 font-mono text-mono-xs text-fg">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
