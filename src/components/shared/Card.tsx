import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export type CardVariant = "surface" | "raised" | "outlined" | "glass";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps extends BaseProps {
  children: ReactNode;

  hover?: boolean;
  style?: CSSProperties;
  variant?: CardVariant;
  padding?: CardPadding;
}

export interface CardSectionProps extends BaseProps {
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  surface: "rounded-lg border border-border bg-ink-200 shadow-(--tapiz-shadow-sm)",
  raised: "rounded-lg border border-border bg-(--tapiz-bg-surface-raised) shadow-(--tapiz-shadow-md)",
  outlined: "rounded-lg border border-border-hi bg-transparent",
  glass: "rounded-lg border border-border bg-[color-mix(in_srgb,var(--tapiz-bg-surface)_78%,transparent)] shadow-(--tapiz-shadow-md) backdrop-blur-xl",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-6",
};

export function Card({
  children,
  className = "",
  hover = false,
  style,
  variant = "surface",
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        variantClasses[variant],
        paddingClasses[padding],
        hover ? "card-hover" : "",
        className,
      ].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardSectionProps) {
  return <div className={`border-b border-border px-5 py-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: CardSectionProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
