import type { TechId } from "@/lib/tech";

/** Technologies confirmed by the CV or by the owner for specific projects. */
export const skillGroups: { label: string; tech: TechId[] }[] = [
  { label: "Languages & frontend", tech: ["typescript", "javascript", "react", "nextjs"] },
  { label: "Backend & data", tech: ["nodejs", "rest", "supabase"] },
  { label: "Platforms", tech: ["wordpress", "shopify", "internetcomputer"] },
];

/** Areas of work described in the CV. */
export const focusAreas = [
  "Responsive interfaces",
  "API & third-party integrations",
  "Payment gateways",
  "Booking & scheduling",
  "Authentication",
  "Real-time features",
] as const;
