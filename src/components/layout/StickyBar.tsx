import type { CSSProperties, ReactNode } from "react";

export interface StickyBarProps {
  children: ReactNode;
  position?: "top" | "bottom";
  className?: string;
  style?: CSSProperties;
}

export function StickyBar({ children, position = "top", className = "", style }: StickyBarProps) {
  return (
    <div
      className={["z-30 border-[var(--tapiz-border-subtle)] bg-[color-mix(in_srgb,var(--tapiz-bg-canvas)_88%,transparent)] px-4 py-3 backdrop-blur-xl", position === "top" ? "sticky top-0 border-b" : "sticky bottom-0 border-t", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}
