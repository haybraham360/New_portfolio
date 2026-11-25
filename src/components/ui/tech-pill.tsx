import { cn } from "@/lib/cn";
import { isDarkMark, tech, type TechId } from "@/lib/tech";
import { Plug } from "./icons";

export function TechLogo({ id, size = 16 }: { id: TechId; size?: number }) {
  const { icon } = tech[id];
  if (!icon) return <Plug size={size} className="text-fg-subtle" />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ fill: `#${icon.hex}` }}
      className={cn("shrink-0", isDarkMark(icon.hex) && "dark:fill-current! dark:text-fg")}
    >
      <path d={icon.path} />
    </svg>
  );
}

export function TechPill({ id, size = "md" }: { id: TechId; size?: "sm" | "md" }) {
  return (
    <li
      className={cn(
        "inline-flex items-center gap-2 border-2 border-ink bg-surface font-mono text-fg",
        size === "md" ? "px-3.5 py-1.5 text-mono-xs" : "px-2.5 py-1 text-xs",
      )}
    >
      <TechLogo id={id} size={size === "md" ? 16 : 13} />
      {tech[id].label}
    </li>
  );
}

export function InlineTechChip({ id }: { id: TechId }) {
  return (
    <span className="inline-flex translate-y-[-1px] items-center gap-1.5 border-2 border-ink bg-surface px-2 py-0 align-middle font-mono text-[0.88em] leading-normal font-semibold text-fg">
      <TechLogo id={id} size={14} />
      {tech[id].label}
    </span>
  );
}
