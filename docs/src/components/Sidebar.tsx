export type ComponentId =
  | "buttons"
  | "input"
  | "card"
  | "stat-card"
  | "badge"
  | "status-badge"
  | "spinner"
  | "skeleton"
  | "empty-state"
  | "data-table"
  | "page-header"
  | "toast";

export interface ComponentGroup {
  label: string;
  items: { id: ComponentId; label: string }[];
}

export const COMPONENT_GROUPS: ComponentGroup[] = [
  {
    label: "Forms",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "input", label: "Input" },
    ],
  },
  {
    label: "Layout",
    items: [
      { id: "card", label: "Card" },
      { id: "stat-card", label: "Stat Card" },
      { id: "page-header", label: "PageHeader" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { id: "badge", label: "Badge" },
      { id: "status-badge", label: "StatusBadge" },
      { id: "spinner", label: "Spinner" },
      { id: "skeleton", label: "Skeleton" },
      { id: "empty-state", label: "EmptyState" },
      { id: "toast", label: "Toast" },
    ],
  },
  {
    label: "Data",
    items: [{ id: "data-table", label: "DataTable" }],
  },
];

interface SidebarProps {
  active: ComponentId;
  onSelect: (id: ComponentId) => void;
}

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <nav
      style={{
        padding: "1rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      {COMPONENT_GROUPS.map((group) => (
        <div key={group.label} style={{ marginBottom: "0.75rem" }}>
          <p
            className="kicker"
            style={{
              padding: "0 1rem",
              marginBottom: "0.375rem",
              fontSize: "0.625rem",
            }}
          >
            {group.label}
          </p>
          {group.items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "0.375rem 1rem",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-body)",
                fontWeight: active === item.id ? 600 : 400,
                color:
                  active === item.id
                    ? "var(--color-primary-300)"
                    : "var(--color-txt-2)",
                background: active === item.id ? "var(--color-ink-200)" : "none",
                border: "none",
                borderLeft: `2px solid ${
                  active === item.id
                    ? "var(--color-primary-300)"
                    : "transparent"
                }`,
                cursor: "pointer",
                transition: "color 0.12s, background 0.12s, border-color 0.12s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
