import Link from "next/link";

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="py-24 sm:py-32">
      <p className="font-mono text-mono-sm text-fg-subtle">404</p>
      <h1 id="not-found-heading" className="mt-3 text-display text-fg">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-5 max-w-prose font-mono text-lead text-fg-muted">
        Everything lives on a single page — head back to see the projects.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center rounded-full bg-btn px-5 text-btn-fg transition-colors hover:bg-btn-hover"
      >
        Back to the homepage
      </Link>
    </section>
  );
}
