import type { ReactNode } from "react";

export type StatusBadgeVariant =
  | "default"
  | "active"
  | "inactive"
  | "warning"
  | "success"
  | "danger"
  | "info"
  | "pending";

export interface StatusBadgeProps {
  label: ReactNode;
  variant?: StatusBadgeVariant;
  className?: string;
}

const BASE =
  "inline-flex items-center border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.15em]";

const variantStyles: Record<StatusBadgeVariant, string> = {
  default: "border-[var(--tapiz-border-strong)] text-[var(--tapiz-text-secondary)] bg-[var(--tapiz-bg-surface-muted)]",
  active: "border-[var(--tapiz-accent)] text-[var(--tapiz-accent)] bg-[var(--tapiz-accent-soft)]",
  success: "border-[var(--tapiz-success)] text-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)]",
  inactive: "border-[var(--tapiz-text-disabled)] text-[var(--tapiz-text-disabled)] bg-transparent",
  warning: "border-[var(--tapiz-warning)] text-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)]",
  danger: "border-[var(--tapiz-danger)] text-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)]",
  info: "border-[var(--tapiz-info)] text-[var(--tapiz-info)] bg-[var(--tapiz-info-soft)]",
  pending: "border-[var(--tapiz-text-muted)] text-[var(--tapiz-text-muted)] bg-transparent",
};

export function StatusBadge({ label, variant = "default", className = "" }: StatusBadgeProps) {
  return <span className={`${BASE} ${variantStyles[variant]} ${className}`.trim()}>{label}</span>;
}
