import { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Select,
  Card,
  CardHeader,
  CardBody,
  Badge,
  StatusBadge,
  Spinner,
  Skeleton,
  SkeletonCard,
  ConfirmDialog,
  DataTable,
  EmptyState,
  useToast,
  type Column,
} from "@tapizlabs/ui";
import ComponentDemo from "../components/ComponentDemo";

interface DemoRow {
  id: number;
  name: string;
  role: string;
  status: string;
}

const TABLE_COLUMNS: Column<DemoRow>[] = [
  { id: "name", header: "Name", cell: (r) => r.name },
  { id: "role", header: "Role", cell: (r) => r.role },
  { id: "status", header: "Status", cell: (r) => r.status },
];

const TABLE_DATA: DemoRow[] = [
  { id: 1, name: "Ada Lovelace", role: "Engineer", status: "Active" },
  { id: 2, name: "Grace Hopper", role: "Researcher", status: "Away" },
  { id: 3, name: "Alan Turing", role: "Theorist", status: "Active" },
];

function ToastDemo() {
  const { showToast } = useToast();
  return (
    <div className="flex gap-3 flex-wrap">
      <Button onClick={() => showToast("Action completed successfully.", true)}>
        Toast Success
      </Button>
      <Button
        variant="danger"
        onClick={() => showToast("Something went wrong.", false)}
      >
        Toast Error
      </Button>
    </div>
  );
}

export default function ComponentsSection() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleConfirm = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setConfirmOpen(false);
    }, 1200);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-txt-1 mb-1">
        Components
      </h2>
      <p className="text-txt-3 mb-8 text-sm">
        Live demos with import snippets. All from{" "}
        <code
          className="text-primary-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          @tapizlabs/ui
        </code>
      </p>

      {/* Buttons */}
      <ComponentDemo
        title="Buttons"
        snippet={`import { Button } from "@tapizlabs/ui";

<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`}
      >
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
      </ComponentDemo>

      {/* Forms */}
      <ComponentDemo
        title="Form — Input, Textarea, Select"
        snippet={`import { Input, Textarea, Select } from "@tapizlabs/ui";

<Input placeholder="Enter value..." />
<Input placeholder="Invalid field" invalid />
<Textarea placeholder="Multiline text..." rows={3} />
<Select>
  <option value="">Choose...</option>
  <option value="a">Option A</option>
</Select>`}
      >
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Input placeholder="Enter value..." />
          <Input placeholder="Invalid field" invalid />
          <Textarea placeholder="Multiline text..." rows={3} />
          <Select>
            <option value="">Choose...</option>
            <option value="a">Option A</option>
            <option value="b">Option B</option>
          </Select>
        </div>
      </ComponentDemo>

      {/* Cards */}
      <ComponentDemo
        title="Cards"
        snippet={`import { Card, CardHeader, CardBody } from "@tapizlabs/ui";

<Card>
  <CardHeader>Card Header</CardHeader>
  <CardBody>Card body content.</CardBody>
</Card>

{/* stat-card utility */}
<div className="stat-card">
  <p className="kicker">Total Users</p>
  <p className="text-3xl font-bold">1,284</p>
</div>

{/* form-panel utility */}
<div className="form-panel p-4">Form panel</div>`}
      >
        <Card style={{ minWidth: "200px" }}>
          <CardHeader>Card Header</CardHeader>
          <CardBody>Card body content with details.</CardBody>
        </Card>
        <div className="stat-card">
          <p className="kicker">Total Users</p>
          <p className="text-3xl font-bold text-txt-1">1,284</p>
        </div>
        <div className="form-panel p-4 min-w-40">
          <p className="text-sm text-txt-2">Form panel utility</p>
        </div>
      </ComponentDemo>

      {/* Feedback */}
      <ComponentDemo
        title="Feedback — Badge, StatusBadge, Spinner, Skeleton"
        snippet={`import { Badge, StatusBadge, Spinner, Skeleton, SkeletonCard } from "@tapizlabs/ui";

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

<StatusBadge label="Active" variant="success" />
<StatusBadge label="Pending" variant="warning" />
<StatusBadge label="Inactive" variant="neutral" />

<Spinner />
<Spinner size="lg" />

<Skeleton className="h-4 w-32" />
<SkeletonCard />`}
      >
        <div className="flex flex-wrap gap-3 items-start w-full">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <StatusBadge label="Active" variant="success" />
            <StatusBadge label="Pending" variant="warning" />
            <StatusBadge label="Inactive" variant="inactive" />
          </div>
          <div className="flex gap-4 items-center">
            <Spinner />
            <Spinner size="lg" />
          </div>
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <SkeletonCard />
          </div>
        </div>
      </ComponentDemo>

      {/* ConfirmDialog */}
      <ComponentDemo
        title="ConfirmDialog"
        snippet={`import { Button, ConfirmDialog } from "@tapizlabs/ui";

const [open, setOpen] = useState(false);

<Button variant="danger" onClick={() => setOpen(true)}>
  Delete Item
</Button>
<ConfirmDialog
  open={open}
  title="Delete item?"
  description="This action cannot be undone."
  confirmLabel="Delete"
  cancelLabel="Cancel"
  danger
  loading={loading}
  onConfirm={handleConfirm}
  onCancel={() => setOpen(false)}
/>`}
      >
        <Button variant="danger" onClick={() => setConfirmOpen(true)}>
          Delete Item
        </Button>
        <ConfirmDialog
          open={confirmOpen}
          title="Delete item?"
          description="This action cannot be undone."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          danger
          loading={confirmLoading}
          onConfirm={handleConfirm}
          onCancel={() => setConfirmOpen(false)}
        />
      </ComponentDemo>

      {/* DataTable */}
      <ComponentDemo
        title="DataTable"
        snippet={`import { DataTable, type Column } from "@tapizlabs/ui";

const columns: Column<Row>[] = [
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
  { key: "status", header: "Status" },
];

<DataTable
  data={rows}
  columns={columns}
  rowKey={(r) => String(r.id)}
/>`}
      >
        <div className="w-full">
          <DataTable
            data={TABLE_DATA}
            columns={TABLE_COLUMNS}
            rowKey={(r) => String(r.id)}
          />
        </div>
      </ComponentDemo>

      {/* EmptyState */}
      <ComponentDemo
        title="EmptyState"
        snippet={`import { EmptyState } from "@tapizlabs/ui";

<EmptyState
  title="No results found"
  description="Try adjusting your filters."
/>`}
      >
        <div className="w-full">
          <EmptyState
            title="No results found"
            description="Try adjusting your filters or search terms."
          />
        </div>
      </ComponentDemo>

      {/* Toast */}
      <ComponentDemo
        title="Toast"
        snippet={`import { useToast, ToastProvider } from "@tapizlabs/ui";

// Wrap app with <ToastProvider>
const { showToast } = useToast();

<Button onClick={() => showToast("Success!", true)}>
  Toast Success
</Button>
<Button variant="danger" onClick={() => showToast("Error!", false)}>
  Toast Error
</Button>`}
      >
        <ToastDemo />
      </ComponentDemo>
    </div>
  );
}
