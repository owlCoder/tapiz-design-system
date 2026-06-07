import type { ReactNode } from "react";

type Variant = "default" | "success" | "warning" | "danger" | "info" | "muted";

const variantClasses: Record<Variant, string> = {
  default: "border-[var(--tapiz-accent)] text-[var(--tapiz-accent)] bg-[var(--tapiz-accent-soft)]",
  success: "border-[var(--tapiz-success)] text-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)]",
  warning: "border-[var(--tapiz-warning)] text-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)]",
  danger: "border-[var(--tapiz-danger)] text-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)]",
  info: "border-[var(--tapiz-info)] text-[var(--tapiz-info)] bg-[var(--tapiz-info-soft)]",
  muted: "border-txt-3 text-txt-3",
};

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
