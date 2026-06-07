export interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  tone?: "accent" | "success" | "warning" | "danger";
  className?: string;
}

const tones = {
  accent: "bg-[var(--tapiz-accent)]",
  success: "bg-[var(--tapiz-success)]",
  warning: "bg-[var(--tapiz-warning)]",
  danger: "bg-[var(--tapiz-danger)]",
};

export function Progress({ value, max = 100, label, showValue = false, tone = "accent", className = "" }: ProgressProps) {
  const percentage = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={className}>
      {(label || showValue) ? (
        <div className="mb-1 flex items-center justify-between gap-3 text-xs text-[var(--tapiz-text-muted)]">
          {label ? <span>{label}</span> : <span />}
          {showValue ? <span className="font-mono">{Math.round(percentage)}%</span> : null}
        </div>
      ) : null}
      <div className="h-2 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)]">
        <div className={`h-full ${tones[tone]}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
