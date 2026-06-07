import type { CSSProperties, ReactNode } from "react";

export type CardVariant = "surface" | "raised" | "outlined" | "brutal" | "glass";
export type CardPadding = "none" | "sm" | "md" | "lg";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
  variant?: CardVariant;
  padding?: CardPadding;
}

export interface CardSectionProps {
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  surface: "border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] shadow-[var(--tapiz-shadow-sm)]",
  raised: "border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-raised)] shadow-[var(--tapiz-shadow-md)]",
  outlined: "border border-[var(--tapiz-border-strong)] bg-transparent",
  brutal: "border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] shadow-[var(--tapiz-shadow-brutal)]",
  glass: "border border-[var(--tapiz-border-subtle)] bg-[color-mix(in_srgb,var(--tapiz-bg-surface)_78%,transparent)] shadow-[var(--tapiz-shadow-md)] backdrop-blur-xl",
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
  return <div className={`border-b border-[var(--tapiz-border-subtle)] px-5 py-3 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = "" }: CardSectionProps) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}
