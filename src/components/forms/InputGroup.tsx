import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface InputGroupProps extends BaseProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  children: ReactNode;
}

export function InputGroup({ prefix, suffix, children, className = "" }: InputGroupProps) {
  return (
    <div className={`flex items-stretch border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) focus-within:border-(--tapiz-border-focus) focus-within:shadow-[inset_3px_0_0_var(--tapiz-signal)] ${className}`}>
      {prefix ? <div className="flex items-center border-r border-(--tapiz-border-subtle) px-3 text-sm text-(--tapiz-text-muted)">{prefix}</div> : null}
      <div className="min-w-0 flex-1 [&_input]:border-0 [&_input]:shadow-none [&_input]:focus:shadow-none">{children}</div>
      {suffix ? <div className="flex items-center border-l border-(--tapiz-border-subtle) px-3 text-sm text-(--tapiz-text-muted)">{suffix}</div> : null}
    </div>
  );
}
