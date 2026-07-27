import type { ReactNode, SelectHTMLAttributes } from "react";
import { Select } from "./Select";

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

/**
 * Option-list wrapper over {@link Select}.
 *
 * Delegates rendering so both share one themed menu: a native `<select>` popup is drawn by the
 * operating system and ignores the app's tokens, which left this control looking like a system
 * widget dropped into a themed form.
 */
export function Combobox({ options, placeholder = "Select option", invalid = false, className = "", ...props }: ComboboxProps) {
  return (
    <Select {...props} invalid={invalid} className={className}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{String(option.label)}</option>
      ))}
    </Select>
  );
}
