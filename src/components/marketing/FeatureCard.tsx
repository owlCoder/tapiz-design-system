import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Card } from "../shared/Card";

export interface FeatureCardProps extends BaseProps {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;

  variant?: "surface" | "raised";
}

export function FeatureCard({ title, description, icon, eyebrow, children, className = "", variant = "surface" }: FeatureCardProps) {
  return (
    <Card variant={variant} hover className={`group ${className}`}>
      <div className="flex items-start gap-4">
        {icon ? <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border-hi bg-(--color-icon-bg) text-primary-300">{icon}</div> : null}
        <div className="min-w-0">
          {eyebrow ? <div className="kicker mb-1">{eyebrow}</div> : null}
          <h3 className="text-lg font-semibold text-txt-1">{title}</h3>
          {description ? <p className="mt-2 text-sm leading-6 text-txt-3">{description}</p> : null}
        </div>
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </Card>
  );
}
