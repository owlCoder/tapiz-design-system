import type { ReactNode } from "react";

export interface ComparisonMeterProps {
  leftLabel: ReactNode;
  rightLabel: ReactNode;
  value: number;
  className?: string;
}

export function ComparisonMeter({ leftLabel, rightLabel, value, className = "" }: ComparisonMeterProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      <div className="mb-2 flex justify-between gap-3 text-sm text-[var(--tapiz-text-muted)]"><span>{leftLabel}</span><span>{rightLabel}</span></div>
      <div className="relative h-3 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)]"><div className="h-full bg-[var(--tapiz-accent)]" style={{ width: `${clamped}%` }} /><div className="absolute top-[-6px] h-6 w-px bg-[var(--tapiz-border-strong)]" style={{ left: `${clamped}%` }} /></div>
    </div>
  );
}
