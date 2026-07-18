import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface ScoreRingProps extends BaseProps {
  value: number;
  max?: number;
  label?: ReactNode;
  size?: number;
}

export function ScoreRing({ value, max = 100, label, size = 112, className = "" }: ScoreRingProps) {
  const normalized = Math.max(0, Math.min(1, value / max));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * normalized;
  return (
    <div className={["relative inline-grid place-items-center", className].filter(Boolean).join(" ")} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--tapiz-border-subtle)" strokeWidth="10" />
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--tapiz-accent)" strokeWidth="10" strokeLinecap="square" strokeDasharray={`${dash} ${circumference - dash}`} />
      </svg>
      <div className="absolute text-center"><div className="font-display text-2xl font-semibold text-(--tapiz-text-primary)">{Math.round(normalized * 100)}%</div>{label ? <div className="text-[11px] font-medium text-(--tapiz-text-muted)">{label}</div> : null}</div>
    </div>
  );
}
