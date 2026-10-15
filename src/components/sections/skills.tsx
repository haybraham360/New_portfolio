import { Section } from "@/components/ui/section";
import { TechPill } from "@/components/ui/tech-pill";
import { focusAreas, skillGroups } from "@/content/skills";

export function Skills() {
  return (
    <Section id="skills" label="Skills" intro="The tools and platforms I use in product and client work:">
      <dl className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
            <dt className="text-sm text-fg-subtle">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2.5">
                {group.tech.map((id) => (
                  <TechPill key={id} id={id} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
        <div className="grid gap-3 border-t border-line pt-6 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
          <dt className="text-sm text-fg-subtle">Areas of work</dt>
          <dd>
            <ul className="flex flex-wrap gap-2.5">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center rounded-full border border-line px-3.5 py-1.5 font-mono text-mono-xs font-normal text-fg-muted"
                >
                  {area}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </Section>
  );
}
