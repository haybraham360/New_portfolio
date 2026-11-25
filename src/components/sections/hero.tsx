import { ArrowDown, FileText, Mail } from "@/components/ui/icons";
import { KeyHint } from "@/components/ui/key-hint";
import { InlineTechChip } from "@/components/ui/tech-pill";
import { Typewriter } from "@/components/interactive/typewriter";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

/** Pink "arcade"-style card: a quick way into the projects. */
function HeroCard() {
  const featured = projects.slice(0, 4);
  return (
    <aside data-type-reveal aria-labelledby="hero-card-title" className="brut rotate-1 bg-card-pink p-6">
      <h2 id="hero-card-title" className="font-display text-2xl text-fg">
        The workshop
      </h2>
      <p className="mt-2 text-fg-muted">{projects.length} things I&rsquo;ve built, from AI tools to client sites.</p>
      <ol className="mt-5 grid grid-cols-4 gap-2.5">
        {featured.map((p, i) => (
          <li key={p.slug}>
            <a
              href={`#${p.slug}-title`}
              title={p.name}
              className={`brut-sm brut-press flex aspect-square items-center justify-center font-display text-lg text-[#141414] ${tileColors[i % tileColors.length]}`}
            >
              {p.name.replace(/^The\s+/i, "").slice(0, 2)}
              <span className="sr-only">: {p.name}</span>
            </a>
          </li>
        ))}
      </ol>
      <a
        href="#projects"
        className="brut-sm brut-press mt-5 flex h-12 items-center justify-center gap-2 bg-btn font-bold text-btn-fg"
      >
        Open the projects <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}

const tileColors = ["bg-[#b9e0f7]", "bg-[#f6c445]", "bg-[#c8f0d4]", "bg-white"];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="grid gap-12 pt-12 pb-10 sm:pt-20 sm:pb-14 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
      <div>
      <p data-type="badge" className="inline-flex -rotate-2 items-center gap-2 border-2 border-ink bg-card-yellow px-3 py-1 font-display text-sm tracking-wider text-fg uppercase">
        <span aria-hidden="true">★</span>
        {profile.title}
      </p>

      <h1 id="hero-heading" data-type="title" className="mt-6 font-display text-display text-fg">
        Hi, I&rsquo;m <span className="name-underline">{profile.name}</span>.
      </h1>

      <div className="mt-7 max-w-[46rem] space-y-3 text-lead text-fg-muted">
        <p data-type="lead" className="text-xl font-semibold text-fg">I build and evaluate LLM-powered applications — and the production software around them.</p>
        <p data-type="body">
          Mostly <InlineTechChip id="python" /> and <InlineTechChip id="typescript" />: RAG, tool-calling agents and
          code-graded evals, shipped with Docker and Kubernetes on top of 3+ years of Next.js and Node.js work.
        </p>
        <p data-type="body">I&rsquo;m also the founder of Impactlia, a tool that shows what a code change could affect.</p>
      </div>

      <div data-type-reveal className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          aria-keyshortcuts="P"
          className="brut brut-press inline-flex h-13 items-center gap-2.5 bg-btn px-5 font-bold text-btn-fg"
        >
          <KeyHint k="p" className="border-btn-fg/25" />
          View projects
          <ArrowDown size={16} className="pointer-fine:hidden" />
        </a>
        <a
          href="#contact"
          aria-keyshortcuts="C"
          className="brut brut-press inline-flex h-13 items-center gap-2.5 bg-surface px-5 font-bold text-fg"
        >
          <KeyHint k="c" className="border-fg/25" />
          Contact me
          <Mail size={16} className="pointer-fine:hidden" />
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener"
          aria-keyshortcuts="R"
          className="brut brut-press inline-flex h-13 items-center gap-2.5 bg-surface px-5 font-bold text-fg"
        >
          <KeyHint k="r" className="border-fg/25" />
          View résumé
          <FileText size={16} className="pointer-fine:hidden" />
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
      </div>
      </div>

      <HeroCard />
      <Typewriter />
    </section>
  );
}
