import type { CSSProperties, InputHTMLAttributes } from "react";
import { Search, X } from "../icons/index";
import { Input } from "../forms/Input";

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  value: string;
  onChange: (value: string) => void;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  inputClassName?: string;
  iconClassName?: string;
  clearable?: boolean;
  clearTitle?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  wrapperClassName = "",
  wrapperStyle,
  inputClassName = "",
  iconClassName = "text-txt-4",
  clearable = true,
  clearTitle = "Clear search",
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative ${wrapperClassName}`.trim()} style={wrapperStyle}>
      <span className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${iconClassName}`.trim()}>
        <Search size={15} />
      </span>
      <Input
        {...props}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`pl-9 ${inputClassName}`.trim()}
      />
      {clearable && value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-txt-4 transition-colors hover:bg-ink-300 hover:text-txt-2"
          title={clearTitle}
        >
          <X size={14} />
        </button>
      ) : null}
    </div>
  );
}
