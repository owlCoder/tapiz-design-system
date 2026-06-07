import type { InputHTMLAttributes } from "react";

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  valueLabel?: string;
}

export function Slider({ label, valueLabel, className = "", ...props }: SliderProps) {
  return (
    <label className={`block ${className}`}>
      {(label || valueLabel) ? (
        <span className="mb-2 flex items-center justify-between gap-3 text-sm">
          {label ? <span className="font-medium text-[var(--tapiz-text-secondary)]">{label}</span> : <span />}
          {valueLabel ? <span className="font-mono text-xs text-[var(--tapiz-text-muted)]">{valueLabel}</span> : null}
        </span>
      ) : null}
      <input
        {...props}
        type="range"
        className="h-2 w-full cursor-pointer appearance-none border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface-muted)] accent-[var(--tapiz-accent)]"
      />
    </label>
  );
}
