import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface KbdProps extends BaseProps {
  children: ReactNode;
}

export function Kbd({ children, className = "" }: KbdProps) {
  return <kbd className={`inline-flex min-w-5 items-center justify-center rounded-sm border border-border-hi bg-ink-300 px-1.5 py-0.5 font-mono text-[10px] font-bold text-txt-2 ${className}`}>{children}</kbd>;
}
