import { ArrowDown, Mail } from "@/components/ui/icons";
import { KeyHint } from "@/components/ui/key-hint";
import { InlineTechChip } from "@/components/ui/tech-pill";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pt-14 pb-10 sm:pt-24 sm:pb-16">
      <p className="inline-flex items-center gap-2 font-mono text-mono-sm text-fg-muted">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        {profile.title}
      </p>

      <h1 id="hero-heading" className="mt-5 text-display text-fg">
        Hi, I&rsquo;m <span className="name-underline text-accent">{profile.name}</span>.
      </h1>

      <div className="mt-7 max-w-[46rem] space-y-3 font-mono text-lead text-fg-muted">
        <p className="text-fg">I build practical web products, end to end — for teams and for clients.</p>
        <p>
          Mostly with <InlineTechChip id="react" /> and <InlineTechChip id="nextjs" /> up front, and Node.js, APIs,
          payments and scheduling behind them.
        </p>
        <p>I&rsquo;m also the founder of Impactlia, a tool that shows what a code change could affect.</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          aria-keyshortcuts="P"
          className="inline-flex h-12 items-center gap-2.5 rounded-full bg-btn px-5 text-btn-fg transition-[background-color,translate] hover:-translate-y-px hover:bg-btn-hover active:translate-y-px"
        >
          <KeyHint k="p" className="border-btn-fg/25" />
          View projects
          <ArrowDown size={16} className="pointer-fine:hidden" />
        </a>
        <a
          href="#contact"
          aria-keyshortcuts="C"
          className="inline-flex h-12 items-center gap-2.5 rounded-full border border-line bg-surface px-5 text-fg transition-[background-color,translate] hover:bg-surface-muted active:translate-y-px"
        >
          <KeyHint k="c" className="border-fg/25" />
          Contact me
          <Mail size={16} className="pointer-fine:hidden" />
        </a>
      </div>
    </section>
  );
}
