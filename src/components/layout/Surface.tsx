import type { CSSProperties, ReactNode } from "react";

export type SurfaceVariant = "canvas" | "surface" | "raised" | "muted" | "brutal" | "inverse";
export type SurfacePadding = "none" | "sm" | "md" | "lg" | "xl";

export interface SurfaceProps {
  children: ReactNode;
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
}

const variantClasses: Record<SurfaceVariant, string> = {
  canvas: "bg-[var(--tapiz-bg-page)] text-[var(--tapiz-text-primary)]",
  surface: "bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-primary)]",
  raised: "bg-[var(--tapiz-bg-surface-raised)] text-[var(--tapiz-text-primary)] shadow-[var(--tapiz-shadow-md)]",
  muted: "bg-[var(--tapiz-bg-surface-muted)] text-[var(--tapiz-text-primary)]",
  brutal: "bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-primary)] border-2 border-[var(--tapiz-border-strong)] shadow-[var(--tapiz-shadow-brutal)]",
  inverse: "bg-[var(--tapiz-bg-surface-inverse)] text-[var(--tapiz-text-inverse)]",
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-6",
  xl: "p-8",
};

export function Surface({ children, variant = "surface", padding = "md", bordered = true, className = "", style }: SurfaceProps) {
  return (
    <section
      className={[variantClasses[variant], paddingClasses[padding], bordered && variant !== "brutal" ? "border border-[var(--tapiz-border-subtle)]" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </section>
  );
}
