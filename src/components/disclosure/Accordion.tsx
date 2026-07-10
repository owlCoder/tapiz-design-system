import type { BaseProps } from "../../types";
import type { ReactNode } from "react";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  meta?: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends BaseProps {
  items: AccordionItem[];
  openIds?: string[];
  onToggle?: (id: string) => void;

  allowMultiple?: boolean;
}

export function Accordion({ items, openIds = [], onToggle, className = "" }: AccordionProps) {
  return (
    <div className={`divide-y divide-(--tapiz-border-subtle) overflow-hidden rounded-lg border border-(--tapiz-border-subtle) bg-(--tapiz-bg-surface) ${className}`}>
      {items.map((item) => {
        const open = openIds.includes(item.id);
        return (
          <section key={item.id}>
            <button
              type="button"
              disabled={item.disabled}
              aria-expanded={open}
              onClick={() => onToggle?.(item.id)}
              className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left disabled:opacity-40"
            >
              <span className="font-semibold text-(--tapiz-text-primary)">{item.title}</span>
              <span className="flex items-center gap-3 text-(--tapiz-text-muted)">
                {item.meta}
                <span aria-hidden="true" className="text-lg text-(--tapiz-text-muted)">{open ? "−" : "+"}</span>
              </span>
            </button>
            {open ? <div className="border-t border-(--tapiz-border-subtle) px-4 py-4 text-sm text-(--tapiz-text-secondary)">{item.content}</div> : null}
          </section>
        );
      })}
    </div>
  );
}
