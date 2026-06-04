# @tapiz/ui

Shared Tapiz design system package for React applications.

Repository: `https://github.com/owlCoder/tapiz-design-system`

`@tapiz/ui` centralizes the visual foundation used across Tapiz frontends:

- shared theme tokens and utility classes
- shared font loading
- shared icon exports
- shared React UI primitives

It is intended to keep multiple apps visually aligned while reducing duplicated UI code.

## Installation

```bash
npm install @tapiz/ui
```

## Requirements

- `react >= 19`
- `react-dom >= 19`
- `tailwindcss >= 4`

These are declared as peer dependencies and must be provided by the consuming app.

## Package Exports

This package exposes:

- `@tapiz/ui`
  React components, icons, and exported TypeScript types
- `@tapiz/ui/theme.css`
  Shared theme tokens, utility classes, button styles, surfaces, and animation helpers
- `@tapiz/ui/fonts`
  Shared IBM Plex font loading entrypoint

## Quick Start

Import fonts once in your application entry:

```ts
import "@tapiz/ui/fonts";
```

Import the shared theme before your app-specific styles:

```css
@import "@tapiz/ui/theme.css";
@source "../node_modules/@tapiz/ui/dist/**/*.js";
```

Then consume components directly from the package:

```tsx
import { Button, EmptyState, InfoBanner } from "@tapiz/ui";

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

`@tapiz/ui` components contain Tailwind class strings inside the published JavaScript bundle. Consumer apps must include the package in Tailwind's source scan:

```css
@source "../node_modules/@tapiz/ui/dist/**/*.js";
```

Without that line, some shared component classes may be omitted from the final CSS build.

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
import { Button, Plus } from "@tapiz/ui";

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
import { ConfirmDialog, Trash } from "@tapiz/ui";

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
import { FieldHint, FieldLabel, Input, Select, Textarea } from "@tapiz/ui";

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
import { EmptyState, Info } from "@tapiz/ui";

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
import { ToastProvider, useToast } from "@tapiz/ui";

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
import { DataTable, type Column } from "@tapiz/ui";

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
import { Button, Plus, LogoMark } from "@tapiz/ui";

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

`@tapiz/ui` is the shared framework layer for reusable Tapiz UI primitives. Layout shells, SEO helpers, language/session flows, and domain-bound selectors should usually stay in consuming apps.

See [FRAMEWORK_BOUNDARY.md](./FRAMEWORK_BOUNDARY.md) for the exact package-vs-app contract used in this workspace.

## Accessibility Notes

- modal components render through portals
- table components expose sortable state through appropriate semantics
- button and feedback primitives preserve native HTML behavior where possible

## Development

Build the package:

```bash
npm run build
```

Type-check the package:

```bash
npm run typecheck
```

## Publishing

Log in to npm first:

```bash
npm login
```

Update the version:

```bash
npm version patch
```

Run the final publish guard locally:

```bash
npm run prepublishOnly
```

Publish to npm:

```bash
npm publish --access public
```

Preview the exact tarball contents before publishing:

```bash
npm run pack:check
```

## Versioning

This package should follow Semantic Versioning:

- patch: bug fixes, non-breaking style fixes, documentation updates
- minor: new exported components, new icons, additive props, backward-compatible shared styles
- major: breaking API changes, removed exports, renamed props, or design-token changes that require consumer updates

When a change is user-visible across multiple applications, record it in `CHANGELOG.md`.

## Release Workflow

Recommended release flow:

1. Update `CHANGELOG.md`
2. Run `npm run typecheck`
3. Run `npm run build`
4. Rebuild consuming apps and visually verify key screens
5. Run `npm run pack:check`
6. Run `npm version patch|minor|major`
7. Publish with `npm publish --access public`

For `file:`-based local consumers inside the Tapiz workspace, reinstall or rebuild consumers after package changes so they pick up the latest `dist` output.

## Changelog Strategy

When shared styles or components change, consuming Tapiz apps should be rebuilt and visually verified because package updates propagate through multiple frontends.

## License

This package is released under the `MIT` license.

Attribution is retained as `Tapiz UI` in the package metadata and license file.
