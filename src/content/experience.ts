export type Role = {
  org: string;
  title: string;
  period: string;
  location?: string;
  highlights: string[];
};

/** Software and product roles, newest first. Source: CV. */
export const experience: Role[] = [
  {
    org: "Impactlia",
    title: "Founder",
    period: "Oct 2026 – Present",
    highlights: [
      "Leading product vision, technical architecture and UX for a code-change impact analysis tool.",
      "Building analysis of GitHub pull requests to surface potentially affected files, dependencies and areas to test.",
    ],
  },
  {
    org: "Wellness Works Counseling LLC",
    title: "Full-Stack Web Developer & Digital Product Manager",
    period: "Sep 2025 – Present",
    location: "United States",
    highlights: [
      "Designed and developed the company website: pages, UI/UX and site architecture.",
      "Built therapist profiles with booking flows, appointment scheduling and payment gateway integration.",
      "Maintain and improve the site, and work with stakeholders on what clients need.",
    ],
  },
  {
    org: "Madiavo",
    title: "Full-Stack Developer",
    period: "Feb 2025 – Aug 2025",
    location: "Lithuania",
    highlights: [
      "Built and deployed responsive web applications with Next.js and TypeScript.",
      "Integrated REST APIs and third-party services, and turned designs into production code.",
      "Took part in code reviews, testing and deployment across cross-functional teams.",
    ],
  },
  {
    org: "CasaSwap",
    title: "Co-Founder (Web3 Application)",
    period: "Feb 2024 – Nov 2024",
    highlights: [
      "Developed the frontend for a decentralised housing platform on the Internet Computer blockchain.",
      "Built property listing, onboarding and transaction flows connected to blockchain backend services.",
    ],
  },
  {
    org: "Built3er",
    title: "Software Developer",
    period: "Feb 2023 – Aug 2023",
    highlights: [],
  },
  {
    org: "Freelance",
    title: "Full-Stack Web Developer",
    period: "Oct 2022 – Jan 2024",
    highlights: [
      "Designed and built websites for business, restaurant and service clients, including WordPress builds.",
      "Implemented database integration, authentication, APIs, payment gateways and booking systems.",
      "Managed projects end to end, from requirements to deployment and ongoing support.",
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
