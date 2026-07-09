import type { BaseProps } from "../../types";
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

interface BadgeProps extends BaseProps {
  children: ReactNode;
  variant?: Variant;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
