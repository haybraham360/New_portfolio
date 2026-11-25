import { ThemeToggle } from "@/components/interactive/theme-toggle";
import { FileText } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { MobileMenu, NavLinks } from "./site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-3 border-ink bg-bg">
      <div className="mx-auto flex h-(--header-h) max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group -mx-1 inline-flex items-center gap-3 px-1 py-1 text-fg">
          <span
            aria-hidden="true"
            className="inline-flex size-11 items-center justify-center rounded-full border-3 border-ink bg-[#b9e0f7] font-display text-base text-[#141414] transition-transform group-hover:-rotate-12"
          >
            AA
          </span>
          <span className="relative font-display text-lg leading-none tracking-tight sm:text-2xl">
            {profile.name}
            <svg
              aria-hidden="true"
              viewBox="0 0 120 8"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-1 h-1.5 w-[85%] text-[var(--swoosh)]"
            >
              <path d="M2 6 C 40 1, 80 1, 118 4" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <span className="sr-only"> — back to top</span>
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          <NavLinks />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="brut-sm brut-press ml-2 inline-flex h-11 min-w-11 items-center justify-center gap-1.5 bg-surface px-3 text-sm font-bold text-fg"
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
