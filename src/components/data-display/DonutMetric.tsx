import type { ReactNode } from "react";

export interface DonutMetricProps {
  value: number;
  max?: number;
  label?: ReactNode;
  caption?: ReactNode;
  size?: number;
  className?: string;
}

export function DonutMetric({ value, max = 100, label, caption, size = 112, className = "" }: DonutMetricProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const ratio = Math.max(0, Math.min(1, value / max));
  const offset = circumference * (1 - ratio);

  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 112 112" role="img" aria-label={`${Math.round(ratio * 100)}%`}>
        <circle cx="56" cy="56" r={radius} fill="none" stroke="var(--tapiz-border-subtle)" strokeWidth="10" />
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke="var(--tapiz-accent)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="square"
          transform="rotate(-90 56 56)"
        />
        <text x="56" y="61" textAnchor="middle" className="fill-[var(--tapiz-text-primary)] font-mono text-lg font-bold">
          {Math.round(ratio * 100)}%
        </text>
      </svg>
      {(label || caption) ? (
        <div>
          {label ? <div className="text-sm font-semibold text-[var(--tapiz-text-primary)]">{label}</div> : null}
          {caption ? <div className="mt-1 text-xs leading-5 text-[var(--tapiz-text-muted)]">{caption}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
