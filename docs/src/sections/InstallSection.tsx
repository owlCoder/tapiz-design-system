import CodeBlock from "../components/CodeBlock";

const INSTALL_SNIPPET = `npm install @tapizlabs/ui`;

const USAGE_NO_TAILWIND = `// 1. Import the compiled CSS (includes all utility classes)
import "@tapizlabs/ui/theme.css";

// 2. Import and use components
import { Button, Card, CardBody, Badge } from "@tapizlabs/ui";

export default function App() {
  return (
    <Card>
      <CardBody>
        <Badge variant="success">Live</Badge>
        <Button>Click me</Button>
      </CardBody>
    </Card>
  );
}`;

const USAGE_WITH_TAILWIND = `// index.css (Tailwind 4)
@import "tailwindcss";
@import "@tapizlabs/ui/theme.css";         // full styles + utility classes
@import "@tapizlabs/ui/tailwind-theme.css"; // @theme tokens for tw utilities

// vite.config.ts — resolve CSS aliases
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@tapizlabs/ui/theme.css": path.resolve(
        "node_modules/@tapizlabs/ui/dist/theme.css"
      ),
      "@tapizlabs/ui/tailwind-theme.css": path.resolve(
        "node_modules/@tapizlabs/ui/dist/tailwind-theme.css"
      ),
    },
  },
});

// Now use design-system tokens in Tailwind utilities:
// <div className="text-primary-500 bg-ink-100 border-border">...</div>`;

const PEER_DEPS = `// peer dependencies
"react": "^19.0.0",
"react-dom": "^19.0.0"`;

interface InstallCardProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

function InstallCard({ step, title, children }: InstallCardProps) {
  return (
    <div className="card mb-6">
      <div className="px-4 py-3 border-b border-border flex items-center gap-3">
        <span className="w-6 h-6 flex items-center justify-center text-xs font-bold text-ink-000 bg-primary-500">
          {step}
        </span>
        <h3
          className="text-sm font-semibold text-txt-1 uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {title}
        </h3>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default function InstallSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-txt-1 mb-1">
        Installation
      </h2>
      <p className="text-txt-3 mb-8 text-sm">
        Get{" "}
        <code
          className="text-primary-400"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          @tapizlabs/ui
        </code>{" "}
        running in your project.
      </p>

      <InstallCard step={1} title="Install package">
        <CodeBlock code={INSTALL_SNIPPET} language="bash" />
        <p className="text-xs text-txt-3 mt-3">
          Peer dependencies:
        </p>
        <CodeBlock code={PEER_DEPS} language="json" />
      </InstallCard>

      <InstallCard step={2} title="Usage without Tailwind">
        <p className="text-sm text-txt-2 mb-3">
          Import{" "}
          <code
            className="text-primary-400 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            theme.css
          </code>{" "}
          once at your app entry point. All utility classes (
          <code
            className="text-primary-400 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            btn-primary
          </code>
          ,{" "}
          <code
            className="text-primary-400 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            card
          </code>
          , etc.) and CSS variables are available globally.
        </p>
        <CodeBlock code={USAGE_NO_TAILWIND} language="tsx" />
      </InstallCard>

      <InstallCard step={3} title="Usage with Tailwind 4">
        <p className="text-sm text-txt-2 mb-3">
          Import both CSS files and configure Vite aliases so PostCSS can
          resolve the bare specifiers.
        </p>
        <CodeBlock code={USAGE_WITH_TAILWIND} language="ts" />
      </InstallCard>

      <div className="card p-4 border-l-2 border-primary-500">
        <p className="kicker mb-1">Note</p>
        <p className="text-sm text-txt-2">
          The package ships pre-built fonts via{" "}
          <code
            className="text-primary-400 text-xs"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            dist/fonts.css
          </code>
          . Import it if your host app does not already load IBM Plex Sans /
          IBM Plex Mono from another source.
        </p>
      </div>
    </div>
  );
}
