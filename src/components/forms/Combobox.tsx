import type { ReactNode, SelectHTMLAttributes } from "react";

export interface ComboboxOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface ComboboxProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: ComboboxOption[];
  placeholder?: string;
  invalid?: boolean;
}

export function Combobox({ options, placeholder = "Select option", invalid = false, className = "", ...props }: ComboboxProps) {
  return (
    <select {...props} className={["input-field appearance-none bg-(--tapiz-bg-surface)", invalid ? "border-warn focus:border-warn" : "", className].filter(Boolean).join(" ")}>
      <option value="">{placeholder}</option>
      {options.map((option) => <option key={option.value} value={option.value}>{String(option.label)}</option>)}
    </select>
  );
}
