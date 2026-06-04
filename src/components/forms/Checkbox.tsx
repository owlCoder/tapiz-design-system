import { type InputHTMLAttributes, useId, useState } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "w-3.5 h-3.5", icon: 10, text: "text-xs",   gap: "gap-1.5" },
  md: { box: "w-4 h-4",     icon: 11, text: "text-sm",   gap: "gap-2"   },
  lg: { box: "w-5 h-5",     icon: 13, text: "text-base", gap: "gap-2.5" },
} as const;

export function Checkbox({
  label,
  size = "md",
  className = "",
  id: providedId,
  checked,
  defaultChecked,
  onChange,
  ...props
}: CheckboxProps) {
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
          type="checkbox"
          checked={isControlled ? checked : internalChecked}
          onChange={(e) => {
            if (!isControlled) setInternalChecked(e.target.checked);
            onChange?.(e);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="sr-only"
        />
        <span
          className={`
            flex items-center justify-center ${s.box}
            border transition-all duration-150
            ${isChecked
              ? "bg-primary-300 border-primary-300"
              : "bg-ink-400 border-border-hi group-hover:border-primary-400"
            }
            ${focused ? "ring-1 ring-primary-300" : ""}
          `}
        >
          {isChecked && (
            <svg
              width={s.icon}
              height={s.icon}
              viewBox="0 0 12 12"
              fill="none"
              stroke="#000"
              strokeWidth="2.2"
              strokeLinecap="square"
            >
              <polyline points="1.5,6 4.5,9.5 10.5,2.5" />
            </svg>
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
