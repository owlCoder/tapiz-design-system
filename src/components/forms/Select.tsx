import type { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export function Select({ className = "", invalid = false, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className={[
        "input-field",
        invalid ? "border-warn focus:border-warn" : "",
        className,
      ].filter(Boolean).join(" ")}
    />
  );
}
