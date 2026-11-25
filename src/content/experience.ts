export type Role = {
  org: string;
  title: string;
  period: string;
  location?: string;
  highlights: string[];
};

/** Software and product roles, newest first. Source: résumé. */
export const experience: Role[] = [
  {
    org: "Impactlia",
    title: "Founder & Lead Engineer",
    period: "Oct 2026 – Present",
    location: "Remote",
    highlights: [
      "Designing and building analysis that maps a pull request's changes to the files, modules and dependencies they can affect, so reviewers see risk before merging.",
      "Defining how the tool surfaces testing considerations for each change: which behaviours must be re-verified, which edge cases are at risk and where test coverage is missing.",
      "Built with TypeScript and Supabase, with optional AI-generated explanations of files and folders, clearly labelled as interpretation rather than analysis. Now in early access.",
    ],
  },
  {
    org: "Wellness Works Counseling LLC",
    title: "Full-Stack Web Developer & Digital Product Manager",
    period: "Sep 2025 – Present",
    location: "United States (Remote)",
    highlights: [
      "Architected and built the company's production website end to end, from page structure and UI/UX through implementation and deployment.",
      "Implemented therapist profile pages and multi-step booking and scheduling flows, including calendar management and appointment logic.",
      "Integrated payment gateways and fixed cross-device checkout issues; turn stakeholder requests into scoped, shipped improvements.",
    ],
  },
  {
    org: "Madiavo",
    title: "Full-Stack Developer",
    period: "Feb 2025 – Aug 2025",
    location: "Lithuania (Remote)",
    highlights: [
      "Built and deployed production web applications in Next.js and TypeScript, implementing features from product requirements through release.",
      "Integrated REST APIs and third-party services with robust error handling and validation; caught defects in code review and testing before release.",
    ],
  },
  {
    org: "CasaSwap",
    title: "Frontend Developer (Web3 Application)",
    period: "Feb 2024 – Jan 2025",
    highlights: [
      "Developed the frontend for a decentralised real-estate platform on the Internet Computer and integrated UI components with on-chain backend services.",
      "Built property listing, onboarding and transaction flows and shipped the MVP with a small team.",
    ],
  },
  {
    org: "Built3er",
    title: "Software Developer",
    period: "Feb 2023 – Aug 2023",
    highlights: [
      "Delivered frontend and backend features in a team codebase; participated in code reviews and iterative, PR-based development.",
    ],
  },
  {
    org: "Freelance",
    title: "Full-Stack Web Developer",
    period: "Oct 2022 – Jan 2024",
    highlights: [
      "Delivered websites, web apps and online stores for business, restaurant and service clients (React, Next.js, Node.js, WordPress, Shopify).",
      "Owned requirements through deployment, including payments, booking and authentication.",
    ],
  },
];

/** Earlier, non-software roles, shown compactly. Source: CV. */
export const earlierExperience: Role[] = [
  {
    org: "Niteo Limited",
    title: "Field Engineer (Renewable Energy & Surveillance Systems)",
    period: "Jan 2022 – Oct 2022",
    location: "Nigeria",
    highlights: [
      "Installed and maintained solar power systems and CCTV surveillance, including network connectivity.",
    ],
  },
  {
    org: "Agymaris Integrated and Applied Services",
    title: "Technical Sales Manager",
    period: "Jan 2016 – Jul 2017",
    location: "Nigeria",
    highlights: [],
  },
];
