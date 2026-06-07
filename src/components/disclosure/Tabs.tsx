import type { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  badge?: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange?: (id: string) => void;
  className?: string;
  variant?: "line" | "boxed" | "brutal";
}

const variants = {
  line: "border-b border-[var(--tapiz-border-subtle)]",
  boxed: "border border-[var(--tapiz-border-subtle)] bg-[var(--tapiz-bg-surface-muted)] p-1",
  brutal: "border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] p-1 shadow-[var(--tapiz-shadow-brutal)]",
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
              className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 ${selected ? "bg-[var(--tapiz-bg-surface)] text-[var(--tapiz-text-primary)] shadow-[inset_0_-2px_0_var(--tapiz-accent)]" : "text-[var(--tapiz-text-muted)] hover:bg-[var(--tapiz-bg-surface)] hover:text-[var(--tapiz-text-primary)]"}`}
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
