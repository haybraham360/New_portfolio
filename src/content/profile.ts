export const profile = {
  name: "Abraham Adewole",
  firstName: "Abraham",
  title: "AI Engineer · Software Engineer",
  email: "haybraham2017@gmail.com",
  /** Served from /public. Replace the file to update the résumé; keep the name so links don't break. */
  resume: "/Abraham_Adewole_Resume.pdf",
  links: {
    github: "https://github.com/haybraham360",
    linkedin: "https://www.linkedin.com/in/abraham-adewole-891b57187",
  },
  description:
    "Abraham Adewole is an AI and software engineer building and evaluating LLM-powered applications — RAG, tool-calling agents and code-graded evals — on top of 3+ years shipping production web apps in TypeScript, Next.js and Python.",
} as const;

export const navSections = [
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navSections)[number]["id"];
