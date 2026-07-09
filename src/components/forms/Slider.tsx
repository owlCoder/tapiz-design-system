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
          {label ? <span className="font-medium text-(--tapiz-text-secondary)">{label}</span> : <span />}
          {valueLabel ? <span className="font-mono text-xs text-(--tapiz-text-muted)">{valueLabel}</span> : null}
        </span>
      ) : null}
      <input
        {...props}
        type="range"
        className="h-2 w-full cursor-pointer appearance-none border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted) accent-(--tapiz-accent)"
      />
    </label>
  );
}
