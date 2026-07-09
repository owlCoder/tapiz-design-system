import type { BaseProps } from "../../types";
import type { InputHTMLAttributes } from "react";

export interface DateRangePickerProps extends BaseProps {
  startLabel?: string;
  endLabel?: string;
  startProps?: InputHTMLAttributes<HTMLInputElement>;
  endProps?: InputHTMLAttributes<HTMLInputElement>;
}

export function DateRangePicker({ startLabel = "From", endLabel = "To", startProps, endProps, className = "" }: DateRangePickerProps) {
  return (
    <div className={["grid gap-3 md:grid-cols-2", className].filter(Boolean).join(" ")}>
      <label className="flex flex-col gap-1.5 text-sm text-(--tapiz-text-muted)"><span>{startLabel}</span><input type="date" {...startProps} className={["input-field", startProps?.className || ""].join(" ")} /></label>
      <label className="flex flex-col gap-1.5 text-sm text-(--tapiz-text-muted)"><span>{endLabel}</span><input type="date" {...endProps} className={["input-field", endProps?.className || ""].join(" ")} /></label>
    </div>
  );
}
