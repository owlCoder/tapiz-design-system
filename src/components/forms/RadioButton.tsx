import { type InputHTMLAttributes, useId, useState } from "react";

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { outer: "w-3.5 h-3.5", inner: "w-1.5 h-1.5", text: "text-xs",   gap: "gap-1.5" },
  md: { outer: "w-4 h-4",     inner: "w-2 h-2",      text: "text-sm",   gap: "gap-2"   },
  lg: { outer: "w-5 h-5",     inner: "w-2.5 h-2.5",  text: "text-base", gap: "gap-2.5" },
} as const;

export function RadioButton({
  label,
  size = "md",
  className = "",
  id: providedId,
  checked,
  defaultChecked,
  onChange,
  ...props
}: RadioButtonProps) {
  const generatedId = useId();
  const id = providedId ?? generatedId;
  const s = sizeMap[size];

  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isChecked = isControlled ? checked : internalChecked;
  const [focused, setFocused] = useState(false);

  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center ${s.gap} cursor-pointer select-none group ${props.disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`}
    >
      <span className="relative shrink-0">
        <input
          {...props}
          id={id}
          type="radio"
          checked={isControlled ? checked : internalChecked}
          onChange={(e) => {
            if (!isControlled) setInternalChecked(e.target.checked);
            onChange?.(e);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="sr-only"
        />
        {/* outer ring — square to match app aesthetic, full for radio feel */}
        <span
          className={`
            flex items-center justify-center ${s.outer}
            rounded-full border transition-all duration-150
            ${isChecked
              ? "bg-ink-400 border-primary-300 shadow-[0_0_0_1px_var(--color-primary-300)]"
              : "bg-ink-400 border-border-hi group-hover:border-primary-400"
            }
            ${focused ? "ring-1 ring-primary-300" : ""}
          `}
        >
          {isChecked && (
            <span className={`${s.inner} rounded-full bg-primary-300`} />
          )}
        </span>
      </span>

      {label && (
        <span className={`${s.text} text-txt-2 group-hover:text-txt-1 transition-colors duration-150`}>
          {label}
        </span>
      )}
    </label>
  );
}
