# Tapiz framework showcase

Use `TapizDocsPage` as the built-in component catalog page. It is intentionally app-router agnostic, so it can be rendered inside Vite, Next, Remix, React Router, or any custom docs shell.

```tsx
import { TapizDocsPage } from "@tapizlabs/ui";
import "@tapizlabs/ui/theme.css";

export default function DocsRoute() {
  return <TapizDocsPage />;
}
```

The page demonstrates foundations, forms, data display, navigation, feedback, enterprise framework blocks, and marketing components. Keep app-specific copy outside the design system; pass custom `title` and `subtitle` if needed.
