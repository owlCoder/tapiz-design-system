import { Alert } from "../icons/index";

export interface FormErrorProps {
  message: string | null | undefined;
  className?: string;
}

export function FormError({ message, className = "" }: FormErrorProps) {
  if (!message) return null;
  return (
    <div
      className={`flex items-start gap-2 px-3 py-2.5 text-sm ${className}`}
      style={{
        background: "color-mix(in srgb, var(--color-warn) 8%, transparent)",
        border: "1px solid color-mix(in srgb, var(--color-warn) 25%, transparent)",
        borderLeft: "3px solid var(--color-warn)",
        color: "var(--color-warn)",
        animation: "var(--animate-scale-in)",
      }}
    >
      <Alert size={14} className="shrink-0 mt-0.5" />
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{message}</span>
    </div>
  );
}
