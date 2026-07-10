import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface ComparisonMeterProps extends BaseProps {
  leftLabel: ReactNode;
  rightLabel: ReactNode;
  value: number;
}

export function ComparisonMeter({ leftLabel, rightLabel, value, className = "" }: ComparisonMeterProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      <div className="mb-2 flex justify-between gap-3 text-sm text-(--tapiz-text-muted)"><span>{leftLabel}</span><span>{rightLabel}</span></div>
      <div className="relative h-3 rounded-full border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted)"><div className="h-full rounded-full bg-(--tapiz-accent)" style={{ width: `${clamped}%` }} /><div className="absolute top-[-6px] h-6 w-px bg-(--tapiz-border-strong)" style={{ left: `${clamped}%` }} /></div>
    </div>
  );
}
