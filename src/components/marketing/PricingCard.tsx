import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { Button } from "../forms/Button";

export interface PricingCardProps extends BaseProps {
  name: ReactNode;
  price: ReactNode;
  description?: ReactNode;
  features?: ReactNode[];
  cta?: ReactNode;
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features = [], cta, highlighted = false, className = "" }: PricingCardProps) {
  return (
    <section className={`flex h-full flex-col border bg-[var(--tapiz-bg-surface)] p-6 ${highlighted ? "border-2 border-[var(--tapiz-border-strong)] shadow-[var(--tapiz-shadow-brutal-lg)]" : "border-[var(--tapiz-border-subtle)] shadow-[var(--tapiz-shadow-sm)]"} ${className}`}>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[var(--tapiz-text-primary)]">{name}</h3>
        {description ? <p className="mt-2 text-sm text-[var(--tapiz-text-muted)]">{description}</p> : null}
        <div className="mt-6 text-4xl font-semibold tracking-tight text-[var(--tapiz-text-primary)]">{price}</div>
        <ul className="mt-6 space-y-3 text-sm text-[var(--tapiz-text-secondary)]">
          {features.map((feature, index) => <li key={index} className="flex gap-2"><span className="text-[var(--tapiz-success)]">✓</span><span>{feature}</span></li>)}
        </ul>
      </div>
      <div className="mt-6">{cta ?? <Button variant={highlighted ? "primary" : "secondary"} fullWidth>Get started</Button>}</div>
    </section>
  );
}
