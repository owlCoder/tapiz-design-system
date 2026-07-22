import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export type SurfaceVariant = "canvas" | "surface" | "raised" | "muted" | "inverse";
export type SurfacePadding = "none" | "sm" | "md" | "lg" | "xl";
export type SurfaceRadius = "md" | "lg" | "xl";

export interface SurfaceProps extends BaseProps {
  children: ReactNode;
  variant?: SurfaceVariant;
  padding?: SurfacePadding;
  radius?: SurfaceRadius;
  bordered?: boolean;

  style?: CSSProperties;
}

const variantClasses: Record<SurfaceVariant, string> = {
  canvas: "bg-(--tapiz-bg-page) text-(--tapiz-text-primary)",
  surface: "bg-(--tapiz-bg-surface) text-(--tapiz-text-primary)",
  raised: "bg-(--tapiz-bg-surface-raised) text-(--tapiz-text-primary) shadow-(--tapiz-shadow-md)",
  muted: "bg-(--tapiz-bg-surface-muted) text-(--tapiz-text-primary)",
  inverse: "bg-(--tapiz-bg-surface-inverse) text-(--tapiz-text-inverse)",
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-6",
  xl: "p-8",
};

const radiusClasses: Record<SurfaceRadius, string> = {
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
};

export function Surface({ children, variant = "surface", padding = "md", radius = "md", bordered = true, className = "", style }: SurfaceProps) {
  return (
    <section
      className={[radiusClasses[radius], variantClasses[variant], paddingClasses[padding], bordered ? "border border-(--tapiz-border-subtle)" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </section>
  );
}
