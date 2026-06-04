import type { ReactNode } from "react";

type Variant = "default" | "success" | "warning" | "danger" | "muted";

const variantClasses: Record<Variant, string> = {
  default: "border-primary-300 text-primary-300",
  success: "border-good text-good",
  warning: "border-signal-400 text-signal-400",
  danger: "border-warn text-warn",
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
