import type { ReactNode } from "react";
import { SearchInput } from "../shared/SearchInput";

export interface CommandItem {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  shortcut?: ReactNode;
  disabled?: boolean;
  onSelect?: () => void;
}

export interface CommandGroup {
  label?: ReactNode;
  items: CommandItem[];
}

export interface CommandMenuProps {
  open: boolean;
  onClose?: () => void;
  query?: string;
  onQueryChange?: (value: string) => void;
  groups: CommandGroup[];
  placeholder?: string;
  empty?: ReactNode;
}

export function CommandMenu({ open, onClose, query = "", onQueryChange, groups, placeholder = "Search commands…", empty = "No commands found." }: CommandMenuProps) {
  if (!open) return null;
  const hasItems = groups.some((group) => group.items.length > 0);
  return (
    <div className="fixed inset-0 z-50 grid place-items-start bg-[var(--tapiz-bg-overlay)] px-4 pt-[12vh]" onClick={onClose}>
      <div className="mx-auto w-full max-w-2xl border-2 border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] shadow-[var(--tapiz-shadow-brutal-lg)]" onClick={(e) => e.stopPropagation()}>
        <div className="border-b border-[var(--tapiz-border-subtle)] p-3">
          <SearchInput value={query} onChange={(value) => onQueryChange?.(value)} placeholder={placeholder} autoFocus />
        </div>
        <div className="max-h-[50vh] overflow-auto p-2">
          {!hasItems ? <div className="p-6 text-center text-sm text-[var(--tapiz-text-muted)]">{empty}</div> : null}
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="py-2">
              {group.label ? <div className="px-2 pb-2 text-[11px] font-semibold text-[var(--tapiz-text-muted)]">{group.label}</div> : null}
              {group.items.map((item) => (
                <button key={item.id} type="button" disabled={item.disabled} onClick={item.onSelect} className="flex w-full items-center gap-3 border border-transparent px-3 py-2 text-left hover:border-[var(--tapiz-border-subtle)] hover:bg-[var(--tapiz-bg-surface-muted)] disabled:opacity-40">
                  {item.icon ? <span className="grid size-8 place-items-center border border-[var(--tapiz-border-subtle)] text-[var(--tapiz-text-muted)]">{item.icon}</span> : null}
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[var(--tapiz-text-primary)]">{item.label}</span>
                    {item.description ? <span className="block text-xs text-[var(--tapiz-text-muted)]">{item.description}</span> : null}
                  </span>
                  {item.shortcut ? <span className="font-mono text-[10px] text-[var(--tapiz-text-muted)]">{item.shortcut}</span> : null}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
