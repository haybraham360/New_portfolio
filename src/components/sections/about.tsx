import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      intro="I like hard problems, and building AI systems you can actually measure and trust."
    >
      <div className="max-w-prose space-y-5 text-base leading-[1.7] text-fg-muted">
        <p>
          I&rsquo;m an AI and software engineer. Since 2022 I&rsquo;ve shipped production web applications in
          TypeScript, Node.js, React, Next.js and Python for businesses, startups and product teams: interfaces,
          APIs and third-party integrations, payments, booking and scheduling.
        </p>
        <p>
          Now I focus on LLM-powered applications: retrieval-augmented generation, tool-calling agents, and
          evaluation that grades answers with code rather than with another model. I containerise and deploy
          services with Docker and Kubernetes, and care a lot about debugging, testing and clear technical writing.
        </p>
        <p>
          I also enjoy the product side. I manage the digital product at Wellness Works Counseling as well as
          developing it, and I&rsquo;m building my own developer tool, Impactlia.
        </p>
        <p>
          My background is in engineering: a BEng in Computer Engineering, and I&rsquo;m studying for an MS in
          Financial Engineering at WorldQuant University, with coursework in machine learning, deep learning and
          econometrics that brings quantitative rigour to the AI systems I build.
        </p>
      </div>
    </Section>
  );
}
