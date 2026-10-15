import type { TechId } from "@/lib/tech";

export type ProjectStatus = "early-access" | "live";

export type Project = {
  slug: string;
  name: string;
  url: string;
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
