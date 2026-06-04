import type { ReactNode } from "react";

function PaletteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="12" r="2.5" stroke="var(--color-primary-300)" strokeWidth="1.5" />
      <circle cx="12" cy="7" r="2.5" stroke="var(--color-primary-300)" strokeWidth="1.5" />
      <circle cx="17" cy="12" r="2.5" stroke="var(--color-primary-300)" strokeWidth="1.5" />
      <circle cx="12" cy="17" r="2.5" stroke="var(--color-primary-300)" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="var(--color-primary-300)" strokeWidth="1.5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        stroke="var(--color-primary-300)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 4h6v2a2 2 0 0 0 4 0V4h6v6h-2a2 2 0 0 0 0 4h2v6h-6v-2a2 2 0 0 0-4 0v2H4v-6h2a2 2 0 0 0 0-4H4V4z"
        stroke="var(--color-primary-300)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: <PaletteIcon />,
    title: "Design Tokens",
    description:
      "CSS variables for colors, typography, spacing. Works without Tailwind.",
  },
  {
    icon: <BoltIcon />,
    title: "Tailwind 4 Ready",
    description:
      "Import tailwind-theme.css to expose all tokens as Tailwind utilities.",
  },
  {
    icon: <PuzzleIcon />,
    title: "React Components",
    description:
      "Pre-built accessible components. Tree-shakeable ESM.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        maxWidth: "80rem",
        margin: "0 auto",
      }}
    >
      <p
        className="kicker"
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        Why @tapizlabs/ui
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: "var(--color-txt-1)",
          textAlign: "center",
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}
      >
        Built for real products
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {FEATURES.map((f) => (
          <div key={f.title} className="card" style={{ padding: "1.75rem" }}>
            <div
              style={{
                marginBottom: "0.875rem",
                lineHeight: 1,
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--color-txt-1)",
                marginBottom: "0.5rem",
              }}
            >
              {f.title}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-txt-3)",
                lineHeight: 1.55,
              }}
            >
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
