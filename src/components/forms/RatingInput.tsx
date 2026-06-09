import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface RatingInputProps extends BaseProps {
  value?: number;
  max?: number;
  icon?: ReactNode;
  onChange?: (value: number) => void;
  label?: string;
}

export function RatingInput({ value = 0, max = 5, icon = "★", onChange, label = "Rating", className = "" }: RatingInputProps) {
  return (
    <div className={["inline-flex items-center gap-1", className].filter(Boolean).join(" ")} role="radiogroup" aria-label={label}>
      {Array.from({ length: max }, (_, index) => {
        const score = index + 1;
        const active = score <= value;
        return <button key={score} type="button" role="radio" aria-checked={active} onClick={() => onChange?.(score)} className={["grid h-9 w-9 place-items-center border text-base transition", active ? "border-[var(--tapiz-border-strong)] bg-[var(--tapiz-accent-soft)] text-[var(--tapiz-accent)]" : "border-[var(--tapiz-border-subtle)] text-[var(--tapiz-text-muted)] hover:border-[var(--tapiz-border-strong)]"].join(" ")}>{icon}</button>;
      })}
    </div>
  );
}
