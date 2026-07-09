import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

type Variant = "default" | "success" | "warning" | "danger" | "info" | "muted";

const variantClasses: Record<Variant, string> = {
  default: "border-(--tapiz-accent) text-(--tapiz-accent) bg-(--tapiz-accent-soft)",
  success: "border-(--tapiz-success) text-(--tapiz-success) bg-(--tapiz-success-soft)",
  warning: "border-(--tapiz-warning) text-(--tapiz-warning) bg-(--tapiz-warning-soft)",
  danger: "border-(--tapiz-danger) text-(--tapiz-danger) bg-(--tapiz-danger-soft)",
  info: "border-(--tapiz-info) text-(--tapiz-info) bg-(--tapiz-info-soft)",
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
