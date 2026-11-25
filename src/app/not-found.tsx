import Link from "next/link";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-24 sm:py-32">
      <p className="inline-block -rotate-2 border-2 border-ink bg-card-yellow px-3 py-1 font-display text-lg text-fg">404</p>
      <h1 id="not-found-heading" className="mt-5 font-display text-display text-fg">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-5 max-w-prose text-lead text-fg-muted italic">
        Everything lives on a single page — head back to see the projects.
      </p>
      <Link
        href="/"
        className="brut brut-press mt-8 inline-flex h-13 items-center bg-btn px-5 font-bold text-btn-fg"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
