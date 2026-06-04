# @tapizlabs/ui

Shared Tapiz design system package for React applications.

Repository: `https://github.com/owlCoder/tapiz-design-system`

`@tapizlabs/ui` centralizes the visual foundation used across Tapiz frontends:

- shared theme tokens and utility classes
- shared font loading
- shared icon exports
- shared React UI primitives

It is intended to keep multiple apps visually aligned while reducing duplicated UI code.

## Installation

```bash
npm install @tapizlabs/ui
```

## Requirements

- `react >= 19`
- `react-dom >= 19`
- `tailwindcss >= 4`

These are declared as peer dependencies and must be provided by the consuming app.

## Package Exports

This package exposes:

- `@tapizlabs/ui`
  React components, icons, and exported TypeScript types
- `@tapizlabs/ui/theme.css`
  Shared theme tokens, utility classes, button styles, surfaces, and animation helpers
- `@tapizlabs/ui/fonts`
  Shared IBM Plex font loading entrypoint

## Quick Start

Import fonts once in your application entry:

```ts
import "@tapizlabs/ui/fonts";
```

Import the shared theme before your app-specific styles:

```css
@import "@tapizlabs/ui/theme.css";
```

Then consume components directly from the package:

```tsx
import { Button, EmptyState, InfoBanner } from "@tapizlabs/ui";

export function ExamplePanel() {
  return (
    <div className="space-y-4">
      <InfoBanner
        title="Shared UI"
        description="This screen is using the shared Tapiz design system package."
      />
      <Button>Save changes</Button>
      <EmptyState
        title="No records"
        description="Create your first item to get started."
      />
    </div>
  );
}
```

## Tailwind Setup

`@tapizlabs/ui/theme.css` is published as a compiled CSS bundle, so consumer apps only need to import it. No extra `@source` directive is required in application code.

## Included Components

Current exports include:

- `Button`
- `Input`
- `Select`
- `Textarea`
- `FieldLabel`
- `FieldHint`
- `Checkbox`
- `RadioButton`
- `Spinner`
- `PageSpinner`
- `Toast`
- `ToastProvider`
- `useToast`
- `FormError`
- `ErrorBoundary`
- `BaseModal`
- `ConfirmDialog`
- `Tooltip`
- `Badge`
- `Card`
- `CardHeader`
- `CardBody`
- `EmptyState`
- `ErrorState`
- `InfoBanner`
- `PageHeader`
- `SearchInput`
- `Pagination`
- `SectionTitle`
- `StatusBadge`
- `ActionMenu`
- `Skeleton`
- `SkeletonCard`
- `SkeletonKpiCard`
- `SkeletonBanner`
- `SkeletonPageHeader`
- `SkeletonTable`
- `DataTable`

## Component Examples

### Button

```tsx
import { Button, Plus } from "@tapizlabs/ui";

export function Actions() {
  return (
    <div className="flex gap-3">
      <Button>Default</Button>
      <Button variant="secondary" icon={Plus}>
        Create
      </Button>
      <Button variant="danger" loading>
        Deleting
      </Button>
    </div>
  );
}
```

### ConfirmDialog

```tsx
import { ConfirmDialog, Trash } from "@tapizlabs/ui";

export function DeleteDialogExample() {
  return (
    <ConfirmDialog
      open
      danger
      title="Delete record"
      description="This action cannot be undone."
      icon={<Trash size={14} />}
      confirmLabel="Delete"
      cancelLabel="Cancel"
      onConfirm={() => {}}
      onCancel={() => {}}
    />
  );
}
```

Compatibility note:

- `ConfirmDialog` supports both `description` and legacy `message`

### Form Primitives

```tsx
import { FieldHint, FieldLabel, Input, Select, Textarea } from "@tapizlabs/ui";

export function ProfileFields() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <FieldLabel htmlFor="name">Display name</FieldLabel>
        <Input id="name" placeholder="Jane Doe" />
        <FieldHint>Visible to other Tapiz users.</FieldHint>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="role">Role</FieldLabel>
        <Select id="role" defaultValue="assistant">
          <option value="assistant">Assistant</option>
          <option value="student">Student</option>
        </Select>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea id="bio" rows={4} placeholder="Short description" />
      </div>
    </div>
  );
}
```

### EmptyState

```tsx
import { EmptyState, Info } from "@tapizlabs/ui";

export function NoResults() {
  return (
    <EmptyState
      title="No results"
      description="Try adjusting your filters."
      icon={<Info size={18} />}
    />
  );
}
```

### ToastProvider

```tsx
import { ToastProvider, useToast } from "@tapizlabs/ui";

function SaveButton() {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      onClick={() => showToast({ message: "Saved successfully.", ok: true })}
    >
      Save
    </button>
  );
}

export function App() {
  return (
    <>
      <SaveButton />
      <ToastProvider />
    </>
  );
}
```

### DataTable

```tsx
import { DataTable, type Column } from "@tapizlabs/ui";

interface User {
  id: string;
  name: string;
  role: string;
}

const columns: Column<User>[] = [
  { id: "name", header: "Name", cell: (row) => row.name, sortable: true, sortAccessor: (row) => row.name },
  { id: "role", header: "Role", cell: (row) => row.role },
];

export function UsersTable({ rows }: { rows: User[] }) {
  return (
    <DataTable
      data={rows}
      columns={columns}
      rowKey={(row) => row.id}
      emptyState="No users"
    />
  );
}
```

## Included Icon Sets

The root package export also includes shared icons used across Tapiz apps, including navigation, status, auth, action, feedback, form, layout, and logo icons.

Example:

```tsx
import { Button, Plus, LogoMark } from "@tapizlabs/ui";

export function Toolbar() {
  return (
    <div className="flex items-center gap-3">
      <LogoMark />
      <Button icon={Plus}>Create</Button>
    </div>
  );
}
```

`Button` accepts either a rendered React node or an icon component reference through the `icon` and `iconRight` props.

Additional branded/storefront icons such as `AppleIcon`, `GooglePlayIcon`, and `Star` are also exported when needed by marketing surfaces.

## Styling Contract

This package is intentionally opinionated. It provides the shared Tapiz visual language, including:

- theme color variables
- font variables
- reusable button classes
- surface and border tokens
- shared motion helpers

Consumer apps can add local styles on top, but should treat `theme.css` as the base design contract for consistency.

## Framework Boundary

`@tapizlabs/ui` is the shared framework layer for reusable Tapiz UI primitives. Layout shells, SEO helpers, language/session flows, and domain-bound selectors should usually stay in consuming apps.

See [FRAMEWORK_BOUNDARY.md](./FRAMEWORK_BOUNDARY.md) for the exact package-vs-app contract used in this workspace.

## Accessibility Notes

- modal components render through portals
- table components expose sortable state through appropriate semantics
- button and feedback primitives preserve native HTML behavior where possible

## License

This package is released under the `MIT` license.

Attribution is retained as `Tapiz UI` in the package metadata and license file.
