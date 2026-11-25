import { ThemeToggle } from "@/components/interactive/theme-toggle";
import { FileText } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { MobileMenu, NavLinks } from "./site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex h-(--header-h) max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group -mx-1 inline-flex items-center gap-2.5 rounded-md px-1 py-1 font-mono text-sm font-medium text-fg"
        >
          <span
            aria-hidden="true"
            className="inline-flex size-8 items-center justify-center rounded-key bg-btn text-xs font-semibold tracking-tight text-btn-fg transition-transform group-hover:-rotate-6"
          >
            AA
          </span>
          <span>
            {profile.name}
            <span className="sr-only"> — back to top</span>
          </span>
        </a>

        <div className="flex items-center gap-1">
          <NavLinks />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="inline-flex h-11 min-w-11 items-center justify-center gap-1.5 rounded-full px-3 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <FileText size={16} />
            <span className="max-sm:sr-only">Résumé</span>
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
