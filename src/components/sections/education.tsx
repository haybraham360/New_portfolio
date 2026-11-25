import { Section } from "@/components/ui/section";
import { certifications, education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="grid gap-7 sm:grid-cols-2">
        {education.map((item) => (
          <li key={item.school} className="brut bg-surface p-5 sm:p-6">
            <p className="flex flex-wrap items-center gap-2 font-mono text-mono-xs font-normal text-fg-subtle">
              {item.period}
              {"note" in item && (
                <span className="border-2 border-ink bg-card-yellow px-2 py-0.5 font-bold text-fg">{item.note}</span>
              )}
            </p>
            <h3 className="mt-3 font-display text-xl leading-snug text-fg">{item.degree}</h3>
            <p className="mt-0.5 text-sm text-fg-muted">{item.school}</p>
            {item.detail && <p className="mt-3 text-sm leading-relaxed text-fg-subtle">{item.detail}</p>}
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
        <h3 className="font-display text-base text-fg">Certifications</h3>
        <ul className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <li key={c} className="brut-sm bg-card-mint px-3.5 py-1.5 font-mono text-mono-xs font-semibold text-fg">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
