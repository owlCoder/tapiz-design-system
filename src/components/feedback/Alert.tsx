import type { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface AlertProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

const toneClasses: Record<AlertTone, string> = {
  info: "border-[var(--tapiz-info)] bg-[var(--tapiz-info-soft)] text-[var(--tapiz-info)]",
  success: "border-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)] text-[var(--tapiz-success)]",
  warning: "border-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)] text-[var(--tapiz-warning)]",
  danger: "border-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)] text-[var(--tapiz-danger)]",
  neutral: "border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-secondary)]",
};

export function Alert({ tone = "info", title, children, icon, actions, className = "" }: AlertProps) {
  return (
    <div className={`flex gap-3 border p-4 ${toneClasses[tone]} ${className}`}>
      {icon ? <div className="mt-0.5 shrink-0">{icon}</div> : null}
      <div className="min-w-0 flex-1">
        {title ? <div className="font-semibold text-[var(--tapiz-text-primary)]">{title}</div> : null}
        {children ? <div className="mt-1 text-sm text-[var(--tapiz-text-secondary)]">{children}</div> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
