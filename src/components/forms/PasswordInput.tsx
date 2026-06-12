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
      className={`flex border border-(--tapiz-border-strong) bg-(--tapiz-bg-surface) focus-within:border-(--tapiz-border-focus) focus-within:shadow-[inset_3px_0_0_0_var(--tapiz-signal)] ${className}`}
    >
      {/* Wrapper već prikazuje focus signal (focus-within); inner input ga ne sme duplirati,
          inače se signal pomera sa paddingom wrappera (npr. pl-10 zbog ikonice). */}
      <input
        {...props}
        type={visible ? "text" : "password"}
        className="min-w-0 flex-1 border-0 bg-transparent px-3 py-2 text-sm text-(--tapiz-text-primary) outline-none focus:shadow-none!"
      />
      <button
        type="button"
        aria-label={revealLabel}
        aria-pressed={visible}
        onClick={() => setVisible((v) => !v)}
        tabIndex={-1}
        className="grid place-items-center px-3 text-(--tapiz-text-muted) transition-colors hover:text-(--tapiz-text-primary)"
      >
        {visible ? <EyeOff size={15} /> : <Eye size={15} />}
      </button>
    </div>
  );
}
