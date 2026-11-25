import {
  siAnthropic,
  siDocker,
  siFastapi,
  siGithubactions,
  siInternetcomputer,
  siJavascript,
  siKubernetes,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPytest,
  siPython,
  siReact,
  siScikitlearn,
  siShopify,
  siStreamlit,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

export type TechId =
  | "python"
  | "typescript"
  | "javascript"
  | "sql"
  | "react"
  | "nextjs"
  | "tailwind"
  | "streamlit"
  | "nodejs"
  | "fastapi"
  | "rest"
  | "postgresql"
  | "pgvector"
  | "supabase"
  | "claude"
  | "openai"
  | "rag"
  | "agents"
  | "mcp"
  | "evals"
  | "tensorflow"
  | "scikitlearn"
  | "pandas"
  | "numpy"
  | "docker"
  | "kubernetes"
  | "githubactions"
  | "vercel"
  | "pytest"
  | "wordpress"
  | "shopify"
  | "internetcomputer";

type Tech = { label: string; icon?: SimpleIcon };

export const tech: Record<TechId, Tech> = {
  python: { label: "Python", icon: siPython },
  typescript: { label: "TypeScript", icon: siTypescript },
  javascript: { label: "JavaScript", icon: siJavascript },
  sql: { label: "SQL" },
  react: { label: "React", icon: siReact },
  nextjs: { label: "Next.js", icon: siNextdotjs },
  tailwind: { label: "Tailwind CSS", icon: siTailwindcss },
  streamlit: { label: "Streamlit", icon: siStreamlit },
  nodejs: { label: "Node.js", icon: siNodedotjs },
  fastapi: { label: "FastAPI", icon: siFastapi },
  rest: { label: "REST APIs" },
  postgresql: { label: "PostgreSQL", icon: siPostgresql },
  pgvector: { label: "pgvector" },
  supabase: { label: "Supabase", icon: siSupabase },
  claude: { label: "Claude API", icon: siAnthropic },
  openai: { label: "OpenAI API" },
  rag: { label: "RAG & hybrid search" },
  agents: { label: "Tool-calling agents" },
  mcp: { label: "Model Context Protocol" },
  evals: { label: "LLM evaluation" },
  tensorflow: { label: "TensorFlow", icon: siTensorflow },
  scikitlearn: { label: "scikit-learn", icon: siScikitlearn },
  pandas: { label: "pandas", icon: siPandas },
  numpy: { label: "NumPy", icon: siNumpy },
  docker: { label: "Docker", icon: siDocker },
  kubernetes: { label: "Kubernetes", icon: siKubernetes },
  githubactions: { label: "GitHub Actions", icon: siGithubactions },
  vercel: { label: "Vercel", icon: siVercel },
  pytest: { label: "pytest", icon: siPytest },
  wordpress: { label: "WordPress", icon: siWordpress },
  shopify: { label: "Shopify", icon: siShopify },
  internetcomputer: { label: "Internet Computer", icon: siInternetcomputer },
};

/** Dark brand marks (e.g. Next.js black) vanish on the navy night theme, so they switch to currentColor there. */
export function isDarkMark(hex: string): boolean {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.08;
}
