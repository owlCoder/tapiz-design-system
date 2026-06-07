import type { ReactNode } from "react";

export type CalloutTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface CalloutProps {
  title?: ReactNode;
  children?: ReactNode;
  tone?: CalloutTone;
  icon?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

const toneClasses: Record<CalloutTone, string> = {
  info: "border-[var(--tapiz-info)] bg-[var(--tapiz-info-soft)]",
  success: "border-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)]",
  warning: "border-[var(--tapiz-warning)] bg-[var(--tapiz-warning-soft)]",
  danger: "border-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)]",
  neutral: "border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)]",
};

export function Callout({ title, children, tone = "info", icon, actions, className = "" }: CalloutProps) {
  return (
    <aside className={`border-l-4 p-4 ${toneClasses[tone]} ${className}`}>
      <div className="flex gap-3">
        {icon ? <div className="text-[var(--tapiz-text-primary)]">{icon}</div> : null}
        <div className="min-w-0 flex-1">
          {title ? <h3 className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{title}</h3> : null}
          {children ? <div className="mt-1 text-sm leading-6 text-[var(--tapiz-text-secondary)]">{children}</div> : null}
          {actions ? <div className="mt-3 flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      </div>
    </aside>
  );
}
