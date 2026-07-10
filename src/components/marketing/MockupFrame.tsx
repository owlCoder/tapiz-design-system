import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface MockupFrameProps extends BaseProps {
  children: ReactNode;
  title?: ReactNode;
  toolbar?: ReactNode;
}

export function MockupFrame({ children, title, toolbar, className = "" }: MockupFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) shadow-(--tapiz-shadow-md) ${className}`}>
      <div className="flex items-center justify-between border-b border-(--tapiz-border-strong) bg-(--tapiz-bg-surface-muted) px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full border border-(--tapiz-border-strong) bg-(--tapiz-danger)" />
          <span className="h-2.5 w-2.5 rounded-full border border-(--tapiz-border-strong) bg-(--tapiz-warning)" />
          <span className="h-2.5 w-2.5 rounded-full border border-(--tapiz-border-strong) bg-(--tapiz-success)" />
        </div>
        {title ? <div className="text-[11px] font-medium text-(--tapiz-text-muted)">{title}</div> : null}
        <div>{toolbar}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
