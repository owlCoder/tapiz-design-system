import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Card } from "../shared/Card";

export interface FeatureCardProps extends BaseProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;

  variant?: "surface" | "brutal" | "raised";
}

export function FeatureCard({ title, description, icon, eyebrow, children, className = "", variant = "surface" }: FeatureCardProps) {
  return (
    <Card variant={variant} hover className={`group ${className}`}>
      <div className="flex items-start gap-4">
        {icon ? <div className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--tapiz-border-strong)] bg-[var(--color-icon-bg)] text-[var(--tapiz-accent)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">{icon}</div> : null}
        <div className="min-w-0">
          {eyebrow ? <div className="kicker mb-1">{eyebrow}</div> : null}
          <h3 className="text-lg font-semibold text-[var(--tapiz-text-primary)]">{title}</h3>
          {description ? <p className="mt-2 text-sm leading-6 text-[var(--tapiz-text-muted)]">{description}</p> : null}
        </div>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </Card>
  );
}
