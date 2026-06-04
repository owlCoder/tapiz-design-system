import { Badge, StatusBadge, Spinner, ToastProvider, useToast } from "@tapizlabs/ui";

function ToastTrigger() {
  const { showToast } = useToast();
  return (
    <button
      className="btn-primary"
      style={{ fontSize: "0.75rem", padding: "0.375rem 0.75rem" }}
      onClick={() => showToast("Toast triggered!", true)}
    >
      Show Toast
    </button>
  );
}

export default function ShowcaseSection() {
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
        Live Preview
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
          fontWeight: 700,
          color: "var(--color-txt-1)",
          textAlign: "center",
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
        }}
      >
        Components at a glance
      </h2>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--color-txt-3)",
          textAlign: "center",
          marginBottom: "2.5rem",
        }}
      >
        Live React components
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
        className="showcase-grid"
      >
        {/* Buttons */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Buttons
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            <button className="btn-primary">Primary</button>
            <button className="btn-secondary">Secondary</button>
            <button className="btn-danger">Danger</button>
          </div>
        </div>

        {/* Input */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Input
          </p>
          <input
            className="input-field"
            placeholder="Type something..."
          />
        </div>

        {/* Card */}
        <div
          className="card"
          style={{ padding: "1.25rem" }}
        >
          <p className="kicker">Card</p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--color-txt-1)",
              margin: "0.375rem 0 0.375rem",
            }}
          >
            Card Title
          </h3>
          <p
            style={{
              color: "var(--color-txt-2)",
              fontSize: "0.875rem",
              lineHeight: 1.5,
            }}
          >
            Card content goes here.
          </p>
        </div>

        {/* Skeleton */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Skeleton
          </p>
          <div className="skeleton" style={{ height: "1rem", width: "12rem" }} />
          <div className="skeleton" style={{ height: "1rem", width: "100%" }} />
          <div className="skeleton" style={{ height: "1rem", width: "8rem" }} />
        </div>

        {/* Badges */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Badges
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
            <Badge>Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        </div>

        {/* StatusBadge */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            StatusBadge
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
            <StatusBadge label="Active" variant="success" />
            <StatusBadge label="Pending" variant="warning" />
            <StatusBadge label="Inactive" variant="inactive" />
          </div>
        </div>

        {/* Spinner */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Spinner
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Spinner size="w-5 h-5" />
            <Spinner size="w-7 h-7" />
          </div>
        </div>

        {/* Toast */}
        <div
          className="card"
          style={{
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          <p className="kicker" style={{ marginBottom: "0.25rem" }}>
            Toast
          </p>
          <ToastProvider>
            <ToastTrigger />
          </ToastProvider>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .showcase-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .showcase-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
