import { useState, type ReactNode } from "react";
import {
  Badge,
  StatusBadge,
  Spinner,
  EmptyState,
  DataTable,
  PageHeader,
  ToastProvider,
  useToast,
  type Column,
} from "@tapizlabs/ui";
import Sidebar, { type ComponentId } from "../components/Sidebar";
import ComponentPreview from "../components/ComponentPreview";

// ── DataTable demo data ────────────────────────────────────────────────────

interface DemoRow {
  id: number;
  name: string;
  role: string;
  status: string;
}

const TABLE_DATA: DemoRow[] = [
  { id: 1, name: "Ana Popovic", role: "Student", status: "Active" },
  { id: 2, name: "Marko Jovic", role: "Professor", status: "Active" },
  { id: 3, name: "Jelena Matic", role: "Student", status: "Inactive" },
];

const TABLE_COLUMNS: Column<DemoRow>[] = [
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "role", header: "Role", cell: (r) => r.role },
  { id: "status", header: "Status", cell: (r) => r.status },
];

// ── Toast demo (must live inside ToastProvider) ────────────────────────────

function ToastDemo() {
  const { showToast } = useToast();
  return (
    <button
      className="btn-primary"
      onClick={() => showToast("Saved successfully!", true)}
    >
      Show Toast
    </button>
  );
}

// ── Component definitions ──────────────────────────────────────────────────

interface ComponentDef {
  id: ComponentId;
  title: string;
  description: string;
  code: string;
  language?: "tsx" | "bash" | "css";
  preview: ReactNode;
}

const COMPONENTS: ComponentDef[] = [
  {
    id: "buttons",
    title: "Buttons",
    description:
      "CSS utility classes for button variants. Use btn-primary, btn-secondary, and btn-danger.",
    code: `<button className="btn-primary">Primary</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-danger">Danger</button>
<button className="btn-primary" disabled>Disabled</button>`,
    preview: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
        <button className="btn-primary">Primary</button>
        <button className="btn-secondary">Secondary</button>
        <button className="btn-danger">Danger</button>
        <button className="btn-primary" disabled>
          Disabled
        </button>
      </div>
    ),
  },
  {
    id: "input",
    title: "Input",
    description:
      "input-field utility class for text inputs and textareas.",
    code: `<input className="input-field" placeholder="Type something..." />
<textarea className="input-field" placeholder="Multiline..." rows={3} />`,
    preview: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          width: "100%",
          maxWidth: "20rem",
        }}
      >
        <input className="input-field" placeholder="Type something..." />
        <textarea className="input-field" placeholder="Multiline..." rows={3} />
      </div>
    ),
  },
  {
    id: "card",
    title: "Card",
    description:
      "card utility class for bordered content containers.",
    code: `<div className="card">
  <p className="kicker">Section</p>
  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
    Card Title
  </h3>
  <p style={{ color: "var(--color-txt-2)", fontSize: "0.875rem" }}>
    Card content goes here.
  </p>
</div>`,
    preview: (
      <div className="card" style={{ padding: "1.25rem", minWidth: "200px" }}>
        <p className="kicker">Section</p>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            color: "var(--color-txt-1)",
            margin: "0.375rem 0",
          }}
        >
          Card Title
        </h3>
        <p style={{ color: "var(--color-txt-2)", fontSize: "0.875rem" }}>
          Card content goes here.
        </p>
      </div>
    ),
  },
  {
    id: "stat-card",
    title: "Stat Card",
    description:
      "stat-card utility class for metric/KPI display blocks.",
    code: `<div className="stat-card">
  <span className="kicker">Total Students</span>
  <span style={{ fontSize: "2rem", fontWeight: 700, color: "var(--color-primary-300)" }}>
    1,284
  </span>
  <span style={{ color: "var(--color-txt-3)", fontSize: "0.75rem" }}>
    +12% this week
  </span>
</div>`,
    preview: (
      <div className="stat-card">
        <span className="kicker">Total Students</span>
        <span
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--color-primary-300)",
          }}
        >
          1,284
        </span>
        <span style={{ color: "var(--color-txt-3)", fontSize: "0.75rem" }}>
          +12% this week
        </span>
      </div>
    ),
  },
  {
    id: "badge",
    title: "Badge",
    description:
      "Inline label component with variant colours. Variants: default, success, warning, danger, muted.",
    code: `import { Badge } from "@tapizlabs/ui";

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>`,
    preview: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="muted">Muted</Badge>
      </div>
    ),
  },
  {
    id: "status-badge",
    title: "StatusBadge",
    description:
      "Status indicator badge. Variants: default, active, inactive, success, warning, danger, pending.",
    code: `import { StatusBadge } from "@tapizlabs/ui";

<StatusBadge label="Active" variant="active" />
<StatusBadge label="Success" variant="success" />
<StatusBadge label="Warning" variant="warning" />
<StatusBadge label="Danger" variant="danger" />
<StatusBadge label="Pending" variant="pending" />
<StatusBadge label="Inactive" variant="inactive" />`,
    preview: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        <StatusBadge label="Active" variant="active" />
        <StatusBadge label="Success" variant="success" />
        <StatusBadge label="Warning" variant="warning" />
        <StatusBadge label="Danger" variant="danger" />
        <StatusBadge label="Pending" variant="pending" />
        <StatusBadge label="Inactive" variant="inactive" />
      </div>
    ),
  },
  {
    id: "spinner",
    title: "Spinner",
    description: "Loading spinner with optional size prop.",
    code: `import { Spinner } from "@tapizlabs/ui";

// size accepts a Tailwind class string, e.g. "w-6 h-6"
<Spinner />
<Spinner size="w-6 h-6" />`,
    preview: (
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Spinner />
        <Spinner size="w-6 h-6" />
      </div>
    ),
  },
  {
    id: "skeleton",
    title: "Skeleton",
    description: "Animated placeholder blocks for loading states.",
    code: `<div className="flex flex-col gap-2">
  <div className="skeleton h-4 w-48" />
  <div className="skeleton h-4 w-full" />
  <div className="skeleton h-4 w-32" />
</div>`,
    preview: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
          maxWidth: "20rem",
        }}
      >
        <div className="skeleton" style={{ height: "1rem", width: "12rem" }} />
        <div className="skeleton" style={{ height: "1rem", width: "100%" }} />
        <div className="skeleton" style={{ height: "1rem", width: "8rem" }} />
      </div>
    ),
  },
  {
    id: "empty-state",
    title: "EmptyState",
    description: "Placeholder shown when a list or table has no data.",
    code: `import { EmptyState } from "@tapizlabs/ui";

<EmptyState title="No items" description="Nothing to show here yet." />`,
    preview: (
      <div style={{ width: "100%" }}>
        <EmptyState title="No items" description="Nothing to show here yet." />
      </div>
    ),
  },
  {
    id: "data-table",
    title: "DataTable",
    description:
      "Generic sortable table. Requires Column<T> with id + cell renderer, and a rowKey function.",
    code: `import { DataTable, type Column } from "@tapizlabs/ui";

interface Row { id: number; name: string; role: string; status: string; }

const columns: Column<Row>[] = [
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "role", header: "Role", cell: (r) => r.role },
  { id: "status", header: "Status", cell: (r) => r.status },
];

const data: Row[] = [
  { id: 1, name: "Ana Popovic", role: "Student", status: "Active" },
  { id: 2, name: "Marko Jovic", role: "Professor", status: "Active" },
  { id: 3, name: "Jelena Matic", role: "Student", status: "Inactive" },
];

<DataTable columns={columns} data={data} rowKey={(r) => String(r.id)} />`,
    preview: (
      <div style={{ width: "100%" }}>
        <DataTable
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          rowKey={(r) => String(r.id)}
        />
      </div>
    ),
  },
  {
    id: "page-header",
    title: "PageHeader",
    description:
      "Standard page title block with optional subtitle and action slot.",
    code: `import { PageHeader } from "@tapizlabs/ui";

<PageHeader title="Dashboard" subtitle="Welcome back" />`,
    preview: (
      <div style={{ width: "100%" }}>
        <PageHeader title="Dashboard" subtitle="Welcome back" />
      </div>
    ),
  },
  {
    id: "toast",
    title: "Toast",
    description:
      "Transient notification. Wrap your app with ToastProvider, then call showToast(message, ok).",
    code: `import { ToastProvider, useToast } from "@tapizlabs/ui";

// In main.tsx — wrap with <ToastProvider>

// Inside any component:
const { showToast } = useToast();

<button
  className="btn-primary"
  onClick={() => showToast("Saved successfully!", true)}
>
  Show Toast
</button>`,
    preview: (
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    ),
  },
];

// ── Page ───────────────────────────────────────────────────────────────────

interface ComponentsPageProps {
  initialComponent?: ComponentId;
}

export default function ComponentsPage({
  initialComponent = "buttons",
}: ComponentsPageProps) {
  const [active, setActive] = useState<ComponentId>(initialComponent);

  const def = COMPONENTS.find((c) => c.id === active);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "calc(100vh - 3.25rem)",
        marginTop: "3.25rem",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          flexShrink: 0,
          borderRight: "1px solid var(--color-border)",
          background: "var(--color-ink-100)",
          position: "sticky",
          top: "3.25rem",
          height: "calc(100vh - 3.25rem)",
          overflowY: "auto",
        }}
      >
        <Sidebar active={active} onSelect={setActive} />
      </aside>

      {/* Content */}
      <main
        style={{
          flex: 1,
          minWidth: 0,
          padding: "2.5rem 2rem",
        }}
      >
        {def ? (
          <ComponentPreview
            key={def.id}
            title={def.title}
            description={def.description}
            code={def.code}
            language={def.language ?? "tsx"}
          >
            {def.preview}
          </ComponentPreview>
        ) : (
          <p style={{ color: "var(--color-txt-3)" }}>
            Select a component from the sidebar.
          </p>
        )}
      </main>
    </div>
  );
}
