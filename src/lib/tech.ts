import {
  siInternetcomputer,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siShopify,
  siSupabase,
  siTypescript,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

export type TechId =
  | "typescript"
  | "javascript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "rest"
  | "supabase"
  | "wordpress"
  | "shopify"
  | "internetcomputer";

type Tech = { label: string; icon?: SimpleIcon };

export const tech: Record<TechId, Tech> = {
  typescript: { label: "TypeScript", icon: siTypescript },
  javascript: { label: "JavaScript", icon: siJavascript },
  react: { label: "React", icon: siReact },
  nextjs: { label: "Next.js", icon: siNextdotjs },
  nodejs: { label: "Node.js", icon: siNodedotjs },
  rest: { label: "REST APIs" },
  supabase: { label: "Supabase", icon: siSupabase },
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
