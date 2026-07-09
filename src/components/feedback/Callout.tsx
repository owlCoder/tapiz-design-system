import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export type CalloutTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface CalloutProps extends BaseProps {
  title?: ReactNode;
  children?: ReactNode;
  tone?: CalloutTone;
  icon?: ReactNode;
  actions?: ReactNode;
}

const toneClasses: Record<CalloutTone, string> = {
  info: "border-(--tapiz-info) bg-(--tapiz-info-soft)",
  success: "border-(--tapiz-success) bg-(--tapiz-success-soft)",
  warning: "border-(--tapiz-warning) bg-(--tapiz-warning-soft)",
  danger: "border-(--tapiz-danger) bg-(--tapiz-danger-soft)",
  neutral: "border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted)",
};

export function Callout({ title, children, tone = "info", icon, actions, className = "" }: CalloutProps) {
  return (
    <aside className={`border-l-4 p-4 ${toneClasses[tone]} ${className}`}>
      <div className="flex gap-3">
        {icon ? <div className="text-(--tapiz-text-primary)">{icon}</div> : null}
        <div className="min-w-0 flex-1">
          {title ? <h3 className="text-sm font-semibold text-(--tapiz-text-primary)">{title}</h3> : null}
          {children ? <div className="mt-1 text-sm leading-6 text-(--tapiz-text-secondary)">{children}</div> : null}
          {actions ? <div className="mt-3 flex flex-wrap gap-2">{actions}</div> : null}
        </div>
      </div>
    </aside>
  );
}
