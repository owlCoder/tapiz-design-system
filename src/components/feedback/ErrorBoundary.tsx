import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface DefaultErrorFallbackProps {
  title?: string;
  description?: string;
  label?: string;
  reloadLabel?: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled UI error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <DefaultErrorFallback />;
    }

    return this.props.children;
  }
}

export function DefaultErrorFallback({
  title = "Something went wrong",
  description = "An unexpected error occurred. Reload the page and try again.",
  label = "Tapiz UI · Runtime Error",
  reloadLabel = "Reload page",
}: DefaultErrorFallbackProps) {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--color-ink-100)" }}
    >
      <GridBg />
      <Spotlight color="rgba(255,100,100,0.06)" />

      <div
        className="relative z-10 flex w-full max-w-sm flex-col items-center gap-6 text-center"
        style={{ animation: "var(--animate-fade-in-up)" }}
      >
        <div>
          <div
            className="font-display font-bold leading-none"
            style={{ fontSize: "clamp(72px,16vw,120px)", color: "var(--color-border-hi)", letterSpacing: "-0.04em" }}
          >
            500
          </div>
          <div
            className="mt-1 h-0.5 w-full"
            style={{ background: "linear-gradient(90deg,transparent,rgba(255,80,80,0.7),transparent)", opacity: 0.5 }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-base font-semibold" style={{ color: "var(--color-txt-1)" }}>{title}</p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-txt-3)" }}>{description}</p>
        </div>

        <div
          className="text-[9px] font-semibold uppercase px-2.5 py-1"
          style={{
            letterSpacing: ".2em",
            color: "rgba(255,80,80,0.9)",
            border: "1px solid rgba(255,80,80,0.25)",
            borderRadius: 999,
            background: "rgba(255,80,80,0.05)",
          }}
        >
          {label}
        </div>

        <div className="w-full">
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "12px",
              fontWeight: 600,
              background: "var(--color-primary-300)",
              color: "var(--color-ink-100)",
              border: "none",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
            }}
          >
            {reloadLabel} →
          </button>
        </div>
      </div>
    </div>
  );
}

export function GridBg() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-50 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-size-[32px_32px]" />
  );
}

export function Spotlight({ color }: { color: string }) {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/5 h-60 w-120 -translate-x-1/2"
      style={{ background: `radial-gradient(ellipse at center, ${color} 0%, transparent 70%)` }}
    />
  );
}
