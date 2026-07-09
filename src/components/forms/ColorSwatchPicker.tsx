import type { BaseProps } from "../../types";
import type { CSSProperties, ReactNode } from "react";

export interface ColorSwatchOption {
  value: string;
  label: ReactNode;
  color: string;
}

export interface ColorSwatchPickerProps extends BaseProps {
  options: ColorSwatchOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export function ColorSwatchPicker({ options, value, onChange, className = "" }: ColorSwatchPickerProps) {
  return (
    <div className={["flex flex-wrap gap-2", className].filter(Boolean).join(" ")}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button key={option.value} type="button" aria-pressed={selected} onClick={() => onChange?.(option.value)} className={["flex items-center gap-2 border px-3 py-2 text-sm transition", selected ? "border-(--tapiz-border-strong) bg-(--tapiz-accent-soft)" : "border-(--tapiz-border-subtle) hover:border-(--tapiz-border-strong)"].join(" ")}>
            <span className="h-4 w-4 border border-(--tapiz-border-strong)" style={{ background: option.color } as CSSProperties} />
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
