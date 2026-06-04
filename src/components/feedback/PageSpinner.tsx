import { Spinner } from "./Spinner";

export function PageSpinner() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-3">
      <Spinner size="w-8 h-8" />
      <span className="kicker">loading</span>
    </div>
  );
}
