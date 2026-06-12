import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "../icons/index";

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Accessible label for the reveal toggle. */
  revealLabel?: string;
}

export function PasswordInput({
  revealLabel = "Show password",
  className = "",
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={`flex border border-[var(--tapiz-border-strong)] bg-[var(--tapiz-bg-surface)] focus-within:border-[var(--tapiz-border-focus)] focus-within:shadow-[inset_3px_0_0_0_var(--tapiz-signal)] ${className}`}
    >
      <input
        {...props}
        type={visible ? "text" : "password"}
        className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-[var(--tapiz-text-primary)] outline-none"
      />
      <button
        type="button"
        aria-label={revealLabel}
        aria-pressed={visible}
        onClick={() => setVisible((v) => !v)}
        tabIndex={-1}
        className="grid place-items-center px-3 text-[var(--tapiz-text-muted)] transition-colors hover:text-[var(--tapiz-text-primary)]"
      >
        {visible ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
}
