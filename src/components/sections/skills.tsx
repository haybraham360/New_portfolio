import { Section } from "@/components/ui/section";
import { TechPill } from "@/components/ui/tech-pill";
import { focusAreas, skillGroups } from "@/content/skills";

const techCount = new Set(skillGroups.flatMap((g) => g.tech)).size;

export function Skills() {
  return (
    <Section id="skills" label="Skills" count={techCount} intro="The tools I use to build, evaluate and ship AI and web products:">
      <dl className="brut space-y-6 bg-surface p-5 sm:p-8">
        {skillGroups.map((group) => (
          <div key={group.label} className="grid gap-3 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
            <dt className="font-display text-base text-fg">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2.5">
                {group.tech.map((id) => (
                  <TechPill key={id} id={id} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
        <div className="grid gap-3 border-t-2 border-dashed border-line-soft pt-6 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
          <dt className="font-display text-base text-fg">Areas of work</dt>
          <dd>
            <ul className="flex flex-wrap gap-2.5">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center bg-card-pink px-3.5 py-1.5 font-mono text-mono-xs font-semibold text-fg"
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
