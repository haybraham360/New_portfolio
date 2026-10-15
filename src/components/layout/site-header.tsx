import { ThemeToggle } from "@/components/interactive/theme-toggle";
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
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
