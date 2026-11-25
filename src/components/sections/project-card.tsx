import { ExternalLink } from "@/components/ui/external-link";
import { ArrowUpRight, ChevronDown, GitHubIcon } from "@/components/ui/icons";
import { TechPill } from "@/components/ui/tech-pill";
import type { Project, ProjectStatus } from "@/content/projects";
import { cn } from "@/lib/cn";

const statusStyle: Record<ProjectStatus, { label: string; className: string }> = {
  "in-progress": { label: "In progress", className: "bg-surface-muted text-fg" },
  "early-access": { label: "Early access", className: "bg-card-yellow text-fg" },
  live: { label: "Live", className: "bg-card-mint text-fg" },
};

function StatusPill({ status, note }: { status: ProjectStatus; note?: string }) {
  const { label, className } = statusStyle[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 border-2 border-ink px-2.5 py-0.5 text-xs font-bold tracking-wide uppercase", className)}>
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

const markColors = ["bg-[#b9e0f7]", "bg-[#f6c445]", "bg-[#f8d3e4]", "bg-[#c8f0d4]"];

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const { name, url, repo, domain, status, statusNote, role, period, summary, tech, details, note } = project;

  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        "brut group/card flex flex-col p-5 transition-[box-shadow,translate] duration-200 ease-out-soft sm:p-6",
        "pointer-fine:hover:-translate-x-0.5 pointer-fine:hover:-translate-y-0.5 pointer-fine:hover:shadow-[9px_9px_0_var(--shadow-ink)]",
        featured ? "bg-card-sky md:col-span-2" : "bg-surface",
      )}
    >
      <div className="flex flex-wrap items-start gap-x-3 gap-y-3">
        <span
          aria-hidden="true"
          className={cn(
            "inline-flex size-12 shrink-0 items-center justify-center border-2 border-ink font-display text-base text-[#141414] transition-transform group-hover/card:-rotate-6",
            markColors[index % markColors.length],
          )}
        >
          {initials(name)}
        </span>
        <div className="min-w-0 flex-1">
          <h3 id={`${project.slug}-title`} className="scroll-mt-32 font-display text-2xl leading-tight text-fg">
            {name}
          </h3>
          <p className="mt-0.5 font-mono text-mono-xs font-normal text-fg-subtle">{domain}</p>
        </div>
        <StatusPill status={status} note={statusNote} />
      </div>

      <div className={cn("mt-5 flex-1", featured && "md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10")}>
        <div>
          <p className="max-w-prose text-base leading-relaxed text-fg-muted">{summary}</p>

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
            className="reveal group/details mt-5 border-t-2 border-dashed border-line-soft pt-1 md:mt-0 md:border-t-0 md:pt-0"
          >
            <summary className="-mx-2 flex h-11 cursor-pointer list-none items-center gap-1.5 px-2 text-sm font-bold text-fg transition-colors select-none hover:text-accent [&::-webkit-details-marker]:hidden">
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
                  <h4 className="text-label font-bold text-fg uppercase">{block.heading}</h4>
                  <ul className="mt-2 space-y-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden="true" className="mt-[0.55em] size-1.5 shrink-0 bg-[var(--swoosh)]" />
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

      {(url || repo) && (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {url && (
            <ExternalLink
              href={url}
              className="brut-sm brut-press group/link inline-flex h-11 items-center gap-1.5 bg-btn px-4 text-sm font-bold text-btn-fg"
            >
              View live site<span className="sr-only">: {name}</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </ExternalLink>
          )}
          {repo && (
            <ExternalLink
              href={repo}
              className="brut-sm brut-press inline-flex h-11 items-center gap-1.5 bg-surface px-4 text-sm font-bold text-fg"
            >
              <GitHubIcon size={15} aria-hidden="true" />
              Source on GitHub<span className="sr-only">: {name}</span>
            </ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
