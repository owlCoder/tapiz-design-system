import { Badge, StatusBadge } from "@tapizlabs/ui";

interface HeroSectionProps {
  onBrowse: () => void;
}

const BADGES = ["React 19", "Tailwind 4", "TypeScript", "Zero config"];

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        opacity: 0.15,
        filter: "blur(2px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          padding: "5rem 2rem 2rem",
          alignItems: "start",
        }}
      >
        {/* Card 1 */}
        <div className="card" style={{ padding: "1rem" }}>
          <p className="kicker" style={{ marginBottom: "0.375rem" }}>Section</p>
          <p style={{ color: "var(--color-txt-1)", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>Card Title</p>
          <p style={{ color: "var(--color-txt-3)", fontSize: "0.75rem" }}>Card content goes here.</p>
        </div>

        {/* Buttons */}
        <div className="card" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <button className="btn-primary" style={{ fontSize: "0.75rem" }}>Primary</button>
          <button className="btn-secondary" style={{ fontSize: "0.75rem" }}>Secondary</button>
        </div>

        {/* Skeletons */}
        <div className="card" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div className="skeleton" style={{ height: "0.75rem", width: "100%" }} />
          <div className="skeleton" style={{ height: "0.75rem", width: "80%" }} />
          <div className="skeleton" style={{ height: "0.75rem", width: "60%" }} />
        </div>

        {/* Stat card */}
        <div className="stat-card" style={{ padding: "1rem" }}>
          <span className="kicker">Total Users</span>
          <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary-300)" }}>1,284</span>
          <span style={{ color: "var(--color-txt-3)", fontSize: "0.6875rem" }}>+12% this week</span>
        </div>

        {/* Input */}
        <div className="card" style={{ padding: "1rem" }}>
          <input className="input-field" placeholder="Search..." style={{ width: "100%", fontSize: "0.75rem" }} readOnly />
        </div>

        {/* Badges */}
        <div className="card" style={{ padding: "1rem", display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>

        {/* StatusBadges */}
        <div className="card" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.375rem" }}>
          <StatusBadge label="Active" variant="success" />
          <StatusBadge label="Pending" variant="warning" />
          <StatusBadge label="Inactive" variant="inactive" />
        </div>

        {/* Card 2 */}
        <div className="card" style={{ padding: "1rem" }}>
          <p className="kicker" style={{ marginBottom: "0.375rem" }}>Stats</p>
          <p style={{ color: "var(--color-txt-1)", fontWeight: 600, fontSize: "0.875rem" }}>84 components</p>
          <p style={{ color: "var(--color-txt-3)", fontSize: "0.75rem" }}>fully typed</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ onBrowse }: HeroSectionProps) {
  return (
    <section
      className="grid-bg"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem 4rem",
        overflow: "hidden",
      }}
    >
      <HeroBackground />

      <div style={{ maxWidth: "42rem", width: "100%", position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            color: "var(--color-txt-1)",
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1.25rem",
          }}
        >
          @tapizlabs/ui
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "var(--color-txt-3)",
            lineHeight: 1.55,
            marginBottom: "2.5rem",
            maxWidth: "34rem",
            margin: "0 auto 2.5rem",
          }}
        >
          A brutalist design system for React.
          <br />
          Zero compromise, full control.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <button
            className="btn-primary"
            onClick={onBrowse}
            style={{ fontSize: "0.9375rem", padding: "0.625rem 1.5rem" }}
          >
            Browse Components
          </button>
          <a
            href="https://github.com/tapizlabs/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              fontSize: "0.9375rem",
              padding: "0.625rem 1.5rem",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            View on GitHub
          </a>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {BADGES.map((badge) => (
            <span
              key={badge}
              className="kicker"
              style={{
                border: "1px solid var(--color-border)",
                padding: "0.25rem 0.625rem",
                background: "var(--color-ink-200)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
