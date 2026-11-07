import type { TechId } from "@/lib/tech";

export type ProjectStatus = "early-access" | "live";

export type Project = {
  slug: string;
  name: string;
  url: string;
  /** Public source repository, when there is one. */
  repo?: string;
  /** Hostname shown on the card, e.g. "impactlia.com". */
  domain: string;
  status: ProjectStatus;
  /** Short qualifier next to the status, e.g. "Ongoing". Only when accurate. */
  statusNote?: string;
  /** Abraham's role, only when confirmed by the CV or the owner. */
  role?: string;
  period?: string;
  summary: string;
  /** Confirmed technologies only. */
  tech: TechId[];
  details?: { heading: string; items: string[] }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "impactlia",
    name: "Impactlia",
    url: "https://impactlia.com",
    repo: "https://github.com/haybraham360/Impactlia",
    domain: "impactlia.com",
    status: "early-access",
    role: "Founder · product & engineering",
    period: "2026 – present",
    summary:
      "My own startup: a developer tool that shows what a pull request could affect before it's merged — the files it may touch, why they're connected, and what's worth testing.",
    tech: ["typescript", "javascript", "supabase"],
    details: [
      {
        heading: "Available in early access",
        items: [
          "Add a public GitHub repository by URL and Impactlia maps the imports between its TypeScript and JavaScript files.",
          "Pick a pull request to trace that map outward from each changed file and list potentially affected files, with the import path that explains each one.",
          "An explainable risk level built from named signals, plus suggested checks with the reason for each.",
          "On request, an AI explanation of a file or folder, clearly labelled as interpretation rather than analysis.",
        ],
      },
      {
        heading: "Not available yet",
        items: ["Private repositories."],
      },
    ],
  },
  {
    slug: "ledger-eval",
    name: "Ledger-Eval",
    url: "https://ledger-eval.vercel.app/",
    repo: "https://github.com/haybraham360/Eval_FinanceSolution",
    domain: "ledger-eval.vercel.app",
    status: "live",
    role: "Built it",
    period: "2026",
    summary:
      "An evaluation framework I built to test how reliable AI models are with money — real financial-engineering and Nigerian tax problems, with every answer graded by code instead of by another AI.",
    tech: ["react"],
    details: [
      {
        heading: "What it tests",
        items: [
          "Financial engineering: payouts, webhooks, FX refunds, wallet repair and settlement reconciliation, where one slip can pay someone twice.",
          "PostgreSQL reliability: concurrency, locks, isolation levels, and how money and time zones are handled.",
          "Nigerian tax compliance: applying the Nigeria Tax Act 2025 without being given the law, including rules that override other rules.",
        ],
      },
      {
        heading: "How it works",
        items: [
          "Each of the 12 core tasks is written like a work ticket at a payments company; models answer with no tools and no second attempts.",
          "Programmatic checkers mark every answer item by item, and are themselves tested against deliberately wrong answers.",
          "A public explorer shows tasks, scores and real graded mistakes, read straight from the committed state of the GitHub repo.",
        ],
      },
    ],
  },
  {
    slug: "genebridge",
    name: "GeneBridge",
    url: "https://genebridge-nine.vercel.app/",
    domain: "genebridge-nine.vercel.app",
    status: "live",
    role: "Built it",
    period: "2026",
    summary:
      "A privacy-first, bilingual (Arabic and English) platform that helps individuals and couples understand inherited disease risk, explore their reproductive options and connect with genetic counsellors.",
    tech: ["nextjs"],
    details: [
      {
        heading: "Key features",
        items: [
          "Plain-language explanations of screening results across recessive, dominant and X-linked conditions.",
          "Couple compatibility view, shown only when both partners consent.",
          "Inheritance simulator and a family-history map to see where conditions appear.",
          "Counsellor booking and referral tracking, plus a portal for clinicians.",
          "Consent controls and an access log; only the interpretation of a result is stored, not raw genetic data.",
        ],
      },
    ],
  },
  {
    slug: "wellness-works-counseling",
    name: "Wellness Works Counseling",
    url: "https://wellnessworkscounseling.com/",
    domain: "wellnessworkscounseling.com",
    status: "live",
    statusNote: "Ongoing",
    role: "Full-Stack Web Developer & Digital Product Manager",
    period: "2025 – present",
    summary:
      "Website for a Pennsylvania counselling practice offering virtual and in-person therapy, with therapist matching, profiles and online booking.",
    tech: [],
    details: [
      {
        heading: "What I worked on",
        items: [
          "Site design, UI/UX and overall architecture.",
          "Therapist profile pages with booking flows for individual practitioners.",
          "Appointment scheduling and calendar management.",
          "Payment gateway integration for client payments.",
          "Performance and responsiveness across mobile and desktop, plus ongoing improvements.",
        ],
      },
    ],
  },
  {
    slug: "intensive-care-counseling",
    name: "Intensive Care Counseling",
    url: "https://intensivecarecounseling.com/",
    domain: "intensivecarecounseling.com",
    status: "live",
    role: "Built the website",
    summary:
      "Website for a Pennsylvania couples-counselling practice, presenting its approach, team, intensive couples work, free webinars, retreats and blog.",
    tech: ["wordpress"],
  },
  {
    slug: "lorita-langai",
    name: "Lorita Langai",
    url: "https://lorita-langai.lt/",
    domain: "lorita-langai.lt",
    status: "live",
    summary:
      "Website for a Lithuanian window-repair business that replaces only the glass unit instead of the whole window, with services, process, reviews and quick call or contact options.",
    tech: [],
    note: "Site is in Lithuanian",
  },
  {
    slug: "the-bravo-burrito",
    name: "The Bravo Burrito",
    url: "https://thebravoburrito.com/",
    domain: "thebravoburrito.com",
    status: "live",
    role: "Built the store · with Astro Digital",
    summary:
      "Online ordering store for a Tex-Mex restaurant in Petersburg, Virginia — browse the menu, add to cart and check out for pickup or delivery.",
    tech: ["shopify"],
  },
];
