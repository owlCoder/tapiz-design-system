import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends BaseProps {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;

  variant?: "line" | "boxed";
}

const variants = {
  line: "border-b border-(--tapiz-border-subtle)",
  boxed: "border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface-muted) p-1",
};

export function Tabs({ items, activeId, onChange, className = "", variant = "line" }: TabsProps) {
  const active = items.find((item) => item.id === activeId) ?? items[0];
  return (
    <div className={className}>
      <div role="tablist" className={`flex flex-wrap gap-1 ${variants[variant]}`}>
        {items.map((item) => {
          const selected = item.id === active?.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              disabled={item.disabled}
              onClick={() => onChange?.(item.id)}
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 ${selected ? "bg-(--tapiz-bg-surface) text-(--tapiz-text-primary) shadow-[inset_0_-2px_0_var(--tapiz-accent)]" : "text-(--tapiz-text-muted) hover:bg-(--tapiz-bg-surface) hover:text-(--tapiz-text-primary)"}`}
            >
              {item.label}
              {item.badge}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="pt-4">{active?.content}</div>
    </div>
  );
}
