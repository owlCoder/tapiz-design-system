import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export function Textarea({ className = "", invalid = false, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={[
        "input-field",
        invalid ? "border-warn focus:border-warn" : "",
        className,
      ].filter(Boolean).join(" ")}
    />
  );
}
