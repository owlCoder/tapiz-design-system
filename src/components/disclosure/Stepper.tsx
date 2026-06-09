import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface StepItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  status?: "complete" | "current" | "upcoming" | "error";
}

export interface StepperProps extends BaseProps {
  steps: StepItem[];
  orientation?: "horizontal" | "vertical";
}

const tone = {
  complete: "border-[var(--tapiz-success)] bg-[var(--tapiz-success-soft)] text-[var(--tapiz-success)]",
  current: "border-[var(--tapiz-accent)] bg-[var(--tapiz-accent-soft)] text-[var(--tapiz-accent)]",
  upcoming: "border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-muted)]",
  error: "border-[var(--tapiz-danger)] bg-[var(--tapiz-danger-soft)] text-[var(--tapiz-danger)]",
};

export function Stepper({ steps, orientation = "horizontal", className = "" }: StepperProps) {
  return (
    <ol className={`grid gap-3 ${orientation === "horizontal" ? "md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]" : ""} ${className}`}>
      {steps.map((step, index) => {
        const status = step.status ?? "upcoming";
        return (
          <li key={step.id} className="flex gap-3">
            <span className={`grid size-8 shrink-0 place-items-center border font-mono text-xs font-bold ${tone[status]}`}>{status === "complete" ? "✓" : index + 1}</span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-[var(--tapiz-text-primary)]">{step.label}</span>
              {step.description ? <span className="mt-1 block text-xs text-[var(--tapiz-text-muted)]">{step.description}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
