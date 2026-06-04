import CodeBlock from "../components/CodeBlock";

const WITHOUT_TAILWIND_INSTALL = `npm install @tapizlabs/ui`;

const WITHOUT_TAILWIND_CSS = `/* your styles.css */
@import "@tapizlabs/ui/theme.css";`;

const WITHOUT_TAILWIND_TSX = `import "@tapizlabs/ui/theme.css";

export default function App() {
  return <button className="btn-primary">Click me</button>;
}`;

const WITH_TAILWIND_CSS = `@import "tailwindcss";
@import "@tapizlabs/ui/tailwind-theme.css";
@source "./**/*.{ts,tsx}";`;

const WITH_TAILWIND_TSX = `import { Button } from "@tapizlabs/ui";

export default function App() {
  return (
    <div className="flex gap-4 p-6 bg-ink-200">
      <Button variant="primary">Save</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
}`;

export default function UsageSection() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background: "var(--color-ink-100)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <p
          className="kicker"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Installation
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: "var(--color-txt-1)",
            textAlign: "center",
            marginBottom: "3.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Get started in minutes
        </h2>

        {/* Without Tailwind */}
        <div style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-txt-1)",
              marginBottom: "0.5rem",
            }}
          >
            Without Tailwind
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-txt-3)",
              marginBottom: "1rem",
              lineHeight: 1.55,
            }}
          >
            Import the theme CSS to get all CSS custom properties and utility
            classes. No build step, no configuration.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <CodeBlock code={WITHOUT_TAILWIND_INSTALL} language="bash" />
            <CodeBlock code={WITHOUT_TAILWIND_CSS} language="css" />
            <CodeBlock code={WITHOUT_TAILWIND_TSX} language="tsx" />
          </div>
        </div>

        {/* With Tailwind 4 */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-txt-1)",
              marginBottom: "0.5rem",
            }}
          >
            With Tailwind 4
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-txt-3)",
              marginBottom: "1rem",
              lineHeight: 1.55,
            }}
          >
            Import the Tailwind theme file to expose all design tokens as
            Tailwind utilities. Use{" "}
            <code
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--color-primary-300)",
              }}
            >
              bg-ink-200
            </code>
            ,{" "}
            <code
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem",
                color: "var(--color-primary-300)",
              }}
            >
              text-primary-300
            </code>
            , and more directly in your markup.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <CodeBlock code={WITH_TAILWIND_CSS} language="css" />
            <CodeBlock code={WITH_TAILWIND_TSX} language="tsx" />
          </div>
        </div>
      </div>
    </section>
  );
}
