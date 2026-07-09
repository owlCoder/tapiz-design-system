import type { BaseProps } from "../../types";
export interface DividerProps extends BaseProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export function Divider({ orientation = "horizontal", label, className = "" }: DividerProps) {
  if (orientation === "vertical") {
    return <div className={`mx-2 min-h-6 w-px bg-(--tapiz-border-subtle) ${className}`} aria-hidden="true" />;
  }

  if (label) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="h-px flex-1 bg-(--tapiz-border-subtle)" />
        <span className="text-[11px] font-medium text-(--tapiz-text-muted)">{label}</span>
        <div className="h-px flex-1 bg-(--tapiz-border-subtle)" />
      </div>
    );
  }

  return <hr className={`border-(--tapiz-border-subtle) ${className}`} />;
}
