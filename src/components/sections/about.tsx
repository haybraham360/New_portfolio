import { Section } from "@/components/ui/section";

export function About() {
  return (
    <Section
      id="about"
      label="About"
      intro="I like solving complex problems and building products that work well and are easy to use."
    >
      <div className="max-w-prose space-y-5 text-base leading-[1.7] text-fg-muted">
        <p>
          I&rsquo;m a full-stack developer working mainly with React, Next.js, TypeScript and Node.js. Since 2022
          I&rsquo;ve built websites and web applications for businesses, startups and product teams: interfaces and
          site architecture, API and third-party integrations, payments, booking and scheduling.
        </p>
        <p>
          I also enjoy the product side. I manage the digital product at Wellness Works Counseling as well as
          developing it, co-founded CasaSwap, a housing platform on the Internet Computer blockchain, and I&rsquo;m now
          building my own developer tool, Impactlia.
        </p>
        <p>
          My background is in engineering: a BEng in Computer Engineering, and I&rsquo;m currently studying for an MSc
          in Financial Engineering.
        </p>
      </div>
    </Section>
  );
}
