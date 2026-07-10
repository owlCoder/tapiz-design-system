import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export type AlertTone = "info" | "success" | "warning" | "danger" | "neutral";

export interface AlertProps extends BaseProps {
  tone?: AlertTone;
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  actions?: ReactNode;
}

const toneClasses: Record<AlertTone, string> = {
  info: "border-(--tapiz-info) bg-(--tapiz-info-soft) text-(--tapiz-info)",
  success: "border-(--tapiz-success) bg-(--tapiz-success-soft) text-(--tapiz-success)",
  warning: "border-(--tapiz-warning) bg-(--tapiz-warning-soft) text-(--tapiz-warning)",
  danger: "border-(--tapiz-danger) bg-(--tapiz-danger-soft) text-(--tapiz-danger)",
  neutral: "border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) text-(--tapiz-text-secondary)",
};

export function Alert({ tone = "info", title, children, icon, actions, className = "" }: AlertProps) {
  return (
    <div className={`flex gap-3 rounded-lg border p-4 ${toneClasses[tone]} ${className}`}>
      {icon ? <div className="mt-0.5 shrink-0">{icon}</div> : null}
      <div className="min-w-0 flex-1">
        {title ? <div className="font-semibold text-(--tapiz-text-primary)">{title}</div> : null}
        {children ? <div className="mt-1 text-sm text-(--tapiz-text-secondary)">{children}</div> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}
