export const profile = {
  name: "Abraham Adewole",
  firstName: "Abraham",
  title: "Full-Stack Developer",
  email: "haybraham2017@gmail.com",
  links: {
    github: "https://github.com/haybraham360",
    linkedin: "https://www.linkedin.com/in/abraham-adewole-891b57187",
  },
  description:
    "Abraham Adewole is a full-stack developer building practical web products with React, Next.js, TypeScript and Node.js — from interfaces to payments, scheduling and API integrations.",
} as const;

export const navSections = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navSections)[number]["id"];
