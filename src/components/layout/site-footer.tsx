import { cacheLife } from "next/cache";
import { ShortcutsButton } from "@/components/interactive/shortcuts-button";
import { ExternalLink } from "@/components/ui/external-link";
import { GitHubIcon, LinkedInIcon, Mail } from "@/components/ui/icons";
import { profile } from "@/content/profile";

async function getYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getYear();
  const linkClass =
    "inline-flex size-11 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="font-mono text-mono-xs font-normal text-fg-subtle">
          © {year} {profile.name}
        </p>
        <div className="-ml-3 flex items-center gap-1 sm:ml-0">
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} className={linkClass}>
            <Mail size={18} />
          </a>
          <ExternalLink href={profile.links.github} aria-label="GitHub" className={linkClass}>
            <GitHubIcon size={18} />
          </ExternalLink>
          <ExternalLink href={profile.links.linkedin} aria-label="LinkedIn" className={linkClass}>
            <LinkedInIcon size={18} />
          </ExternalLink>
          <ShortcutsButton />
        </div>
      </div>
    </footer>
  );
}
