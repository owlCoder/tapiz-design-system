import DarkModeToggle from "./DarkModeToggle";

interface NavbarProps {
  onNavigate: (page: "landing" | "components") => void;
}

function TapizLogoSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect width="32" height="32" rx="8" fill="#1496b3" />
      <path d="M5 9 L5 5 L9 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" />
      <path d="M23 5 L27 5 L27 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" />
      <path d="M5 23 L5 27 L9 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" />
      <path d="M23 27 L27 27 L27 23" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" opacity="0.5" />
      <rect x="15" y="10" width="2" height="14" fill="#FFFFFF" />
      <rect x="10" y="10" width="12" height="2" fill="#FFFFFF" />
    </svg>
  );
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "3.25rem",
        background: "var(--color-ink-100)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => onNavigate("landing")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <TapizLogoSvg />
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--color-primary-300)",
            letterSpacing: "-0.02em",
          }}
        >
          tapiz
        </span>
        <span style={{ color: "var(--color-border-hi)", margin: "0 0.125rem" }}>/</span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            color: "var(--color-txt-3)",
          }}
        >
          ui
        </span>
      </button>

      {/* Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <button
          className="btn-primary"
          onClick={() => onNavigate("components")}
          style={{ fontSize: "0.8125rem", padding: "0.375rem 0.875rem" }}
        >
          Browse Components
        </button>
        <DarkModeToggle />
      </div>
    </header>
  );
}
