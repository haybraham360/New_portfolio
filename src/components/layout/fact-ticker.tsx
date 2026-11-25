import { projects } from "@/content/projects";

/** Fun-fact marquee under the header. Everything here restates facts from elsewhere on the page. */
const facts = [
  "I grade LLM answers with code, not with another model",
  `${projects.length} projects live or in progress`,
  "3+ years shipping production web apps",
  "Founder of Impactlia",
  "BEng in Computer Engineering",
  "Studying an MS in Financial Engineering",
  "Websites built for businesses in the US and Lithuania",
  "RAG · tool-calling agents · evals",
];

function Star() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7.1L12 17.3 5.8 21l1.6-7.1L2 9.2l7.1-.6L12 2Z" />
    </svg>
  );
}

function FactList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {facts.map((fact) => (
        <li key={fact} className="flex items-center gap-4 pr-12 whitespace-nowrap">
          <Star />
          {fact}
        </li>
      ))}
    </ul>
  );
}

export function FactTicker() {
  return (
    <div
      aria-label="Quick facts"
      role="region"
      className="ticker overflow-hidden border-b-3 border-ink bg-[#f6c445] py-3 font-display text-sm tracking-[0.12em] text-[#141414] uppercase sm:text-base"
    >
      {/* Two copies side by side; the track slides by half its width for a seamless loop. */}
      <div className="ticker-track flex w-max pl-6">
        <FactList />
        <FactList hidden />
      </div>
    </div>
  );
}
