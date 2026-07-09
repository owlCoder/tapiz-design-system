import type { BaseProps } from "../../types";
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

export interface StatusBadgeProps extends BaseProps {
  label: ReactNode;
  variant?: StatusBadgeVariant;
}

const BASE =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold";

const variantStyles: Record<StatusBadgeVariant, string> = {
  default: "border-(--tapiz-border-strong) text-(--tapiz-text-secondary) bg-(--tapiz-bg-surface-muted)",
  active: "border-(--tapiz-accent) text-(--tapiz-accent) bg-(--tapiz-accent-soft)",
  success: "border-(--tapiz-success) text-(--tapiz-success) bg-(--tapiz-success-soft)",
  inactive: "border-(--tapiz-text-disabled) text-(--tapiz-text-disabled) bg-transparent",
  warning: "border-(--tapiz-warning) text-(--tapiz-warning) bg-(--tapiz-warning-soft)",
  danger: "border-(--tapiz-danger) text-(--tapiz-danger) bg-(--tapiz-danger-soft)",
  info: "border-(--tapiz-info) text-(--tapiz-info) bg-(--tapiz-info-soft)",
  pending: "border-(--tapiz-text-muted) text-(--tapiz-text-muted) bg-transparent",
};

export function StatusBadge({ label, variant = "default", className = "" }: StatusBadgeProps) {
  return <span className={`${BASE} ${variantStyles[variant]} ${className}`.trim()}>{label}</span>;
}
