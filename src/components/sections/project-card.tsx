import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRight, ChevronDown } from "@/components/ui/icons";
import { TechPill } from "@/components/ui/tech-pill";
import type { Project, ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/cn";

const statusStyle: Record<ProjectStatus, { label: string; className: string }> = {
  "early-access": { label: "Early access", className: "bg-surface-tint text-accent-on-tint" },
  live: { label: "Live", className: "bg-success-bg text-success" },
};

function StatusPill({ status, note }: { status: ProjectStatus; note?: string }) {
  const { label, className } = statusStyle[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-mono-xs", className)}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
      {label}
      {note && <span className="opacity-80">· {note}</span>}
    </span>
  );
}

function initials(name: string) {
  return name
    .replace(/^The\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { name, url, domain, status, statusNote, role, period, summary, tech, details, note } = project;

  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        "group/card flex flex-col rounded-card border border-line bg-surface p-5 transition-[border-color,box-shadow,translate] duration-200 ease-out-soft sm:p-6",
        "focus-within:border-line-hover hover:border-line-hover hover:shadow-raised pointer-fine:hover:-translate-y-0.5",
        featured && "md:col-span-2",
      )}
    >
      <div className="flex flex-wrap items-start gap-x-3 gap-y-3">
        <span
          aria-hidden="true"
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-card bg-surface-muted font-mono text-sm font-semibold text-fg transition-colors group-hover/card:bg-surface-tint group-hover/card:text-accent-on-tint"
        >
          {initials(name)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 id={`${project.slug}-title`} className="font-mono text-title text-fg">
            {name}
          </h3>
          <p className="font-mono text-mono-xs font-normal text-fg-subtle">{domain}</p>
        </div>
        <StatusPill status={status} note={statusNote} />
      </div>

      <div className={cn("mt-5 flex-1", featured && "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10")}>
        <div>
          <p className="max-w-prose font-mono text-mono-sm text-fg-muted">{summary}</p>

          {(role || period || note) && (
            <dl className="mt-4 space-y-1 text-sm">
              {role && (
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-fg-subtle">Role</dt>
                  <dd className="text-fg">
                    {role}
                    {period && <span className="text-fg-subtle"> · {period}</span>}
                  </dd>
                </div>
              )}
              {note && (
                <div className="flex gap-2">
                  <dt className="w-14 shrink-0 text-fg-subtle">Note</dt>
                  <dd className="text-fg">{note}</dd>
                </div>
              )}
            </dl>
          )}

          {tech.length > 0 && (
            <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
              {tech.map((id) => (
                <TechPill key={id} id={id} size="sm" />
              ))}
            </ul>
          )}
        </div>

        {details && (
          <details
            open={featured}
            className="reveal group/details mt-5 border-t border-line pt-1 md:mt-0 md:border-t-0 md:pt-0"
          >
            <summary className="-mx-2 flex h-11 cursor-pointer list-none items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-fg-muted transition-colors select-none hover:text-fg [&::-webkit-details-marker]:hidden">
              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-open/details:rotate-180"
              />
              <span className="group-open/details:hidden">Show details</span>
              <span className="hidden group-open/details:inline">Hide details</span>
            </summary>
            <div className="space-y-4 pt-2 pb-1">
              {details.map((block) => (
                <div key={block.heading}>
                  <h4 className="text-label text-fg-subtle uppercase">{block.heading}</h4>
                  <ul className="mt-2 space-y-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-[0.6em] size-1 shrink-0 rounded-full bg-line-strong" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>

      <div className="mt-6 flex items-center">
        <ExternalLink
          href={url}
          className="group/link inline-flex h-11 items-center gap-1.5 rounded-full bg-surface-muted px-4 text-sm font-medium text-fg transition-colors hover:bg-btn hover:text-btn-fg"
        >
          View live site<span className="sr-only">: {name}</span>
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </ExternalLink>
      </div>
    </article>
  );
}
