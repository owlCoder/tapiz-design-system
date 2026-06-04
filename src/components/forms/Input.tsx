import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ className = "", invalid = false, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={[
        "input-field",
        invalid ? "border-warn focus:border-warn" : "",
        className,
      ].filter(Boolean).join(" ")}
    />
  );
}
