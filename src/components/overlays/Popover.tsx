import type { ReactNode } from "react";

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  open?: boolean;
  align?: "start" | "end";
  className?: string;
}

export function Popover({ trigger, children, open = false, align = "start", className = "" }: PopoverProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {trigger}
      {open ? (
        <div className={`absolute top-full z-40 mt-2 min-w-64 border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] p-2 shadow-[var(--tapiz-shadow-md)] ${align === "end" ? "right-0" : "left-0"}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
