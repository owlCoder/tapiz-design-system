import type { BaseProps } from "../../types";
import { Alert } from "../icons/index";

export interface FormErrorProps extends BaseProps {
  message: string | null | undefined;
}

export function FormError({ message, className = "" }: FormErrorProps) {
  if (!message) return null;
  return (
    <div
      className={`flex items-start gap-2.5 px-3.5 py-2.5 text-sm text-warn bg-warn/8 border border-warn/25 rounded-md animate-scale-in ${className}`}
    >
      <Alert size={14} className="shrink-0 mt-0.5" />
      <span className="text-[13px] font-medium leading-relaxed">{message}</span>
    </div>
  );
}
