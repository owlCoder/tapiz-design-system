import { LoadingState } from "./LoadingState";

/*
 * These names are kept so existing call sites keep compiling, but the grey
 * placeholder shapes are gone: every in-flight region renders the one shared
 * animated loading state instead of a bespoke mirror of the layout it replaces.
 *
 * The sizing props (`rows`, `cols`, `delay`) are accepted and ignored: they
 * described the old placeholder geometry, and keeping them in the signature means
 * the call sites did not all have to change in one commit.
 */

export function SkeletonCard({ className = "" }: { className?: string }) {
  return <LoadingState size="compact" className={className} />;
}

export function SkeletonKpiCard(_props: { delay?: number }) {
  return <LoadingState size="compact" />;
}

export function SkeletonBanner() {
  return <LoadingState size="compact" />;
}

export function SkeletonTable(_props: { rows?: number; cols?: number }) {
  return <LoadingState />;
}

/**
 * Renders nothing.
 *
 * A page header placeholder only ever appears above a list placeholder on the
 * same loading flag, so drawing one here would put two loaders on screen for a
 * single wait. The list's own `LoadingState` speaks for the whole page.
 */
export function SkeletonPageHeader() {
  return null;
}
