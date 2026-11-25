import type { TechId } from "@/lib/tech";

/** Technologies from the résumé (AI Engineer, 2026). */
export const skillGroups: { label: string; tech: TechId[] }[] = [
  { label: "AI & LLM engineering", tech: ["claude", "openai", "rag", "pgvector", "agents", "mcp", "evals"] },
  { label: "Languages", tech: ["python", "typescript", "javascript", "sql"] },
  { label: "Backend & data", tech: ["fastapi", "nodejs", "rest", "postgresql", "supabase"] },
  { label: "Frontend", tech: ["react", "nextjs", "tailwind", "streamlit"] },
  { label: "Machine learning", tech: ["tensorflow", "scikitlearn", "pandas", "numpy"] },
  { label: "DevOps & testing", tech: ["docker", "kubernetes", "githubactions", "vercel", "pytest"] },
  { label: "Platforms", tech: ["wordpress", "shopify", "internetcomputer"] },
];

/** Areas of work described in the résumé. */
export const focusAreas = [
  "Retrieval-augmented generation",
  "Embeddings & reranking",
  "Structured outputs",
  "Prompt engineering",
  "Time-series & backtesting",
  "Payments & booking flows",
  "Authentication",
  "Code review & regression checks",
] as const;
