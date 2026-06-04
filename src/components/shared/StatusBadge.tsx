import type { ReactNode } from "react";

export type StatusBadgeVariant =
  | "default"
  | "active"
  | "inactive"
  | "warning"
  | "success"
  | "danger"
  | "pending";

export interface StatusBadgeProps {
  label: ReactNode;
  variant?: StatusBadgeVariant;
  className?: string;
}

const BASE =
  "inline-flex items-center border px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-[0.15em]";

const variantStyles: Record<StatusBadgeVariant, string> = {
  default: "border-border-hi text-txt-2",
  active: "border-primary-300 text-primary-300",
  success: "border-good text-good",
  inactive: "border-txt-4 text-txt-4",
  warning: "border-warn text-warn",
  danger: "border-warn text-warn",
  pending: "border-txt-3 text-txt-3",
};

export function StatusBadge({ label, variant = "default", className = "" }: StatusBadgeProps) {
  return <span className={`${BASE} ${variantStyles[variant]} ${className}`.trim()}>{label}</span>;
}
