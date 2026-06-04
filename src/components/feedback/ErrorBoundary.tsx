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
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-ink-100 px-6">
      <GridBg />
      <Spotlight color="rgba(255,100,100,0.06)" />

      <div className="relative z-10 flex w-full max-w-sm animate-fade-in-up flex-col items-center gap-6 text-center">
        <div>
          <div className="font-mono text-[clamp(72px,16vw,120px)] font-bold leading-none tracking-[-0.04em] text-border-hi">
            500
          </div>
          <div className="mt-1 h-0.5 w-full opacity-35 [background:linear-gradient(90deg,transparent,var(--color-warn),transparent)]" />
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-base font-semibold text-txt-1">{title}</p>
          <p className="font-mono text-[11px] leading-relaxed text-txt-3">{description}</p>
        </div>

        <div className="bg-[rgba(255,180,0,0.04)] px-2 py-1 font-mono text-[9px] uppercase tracking-[.2em] text-warn [border:1px_solid_rgba(255,180,0,0.2)]">
          {label}
        </div>

        <div className="w-full">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-primary w-full py-2.5 text-xs"
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
