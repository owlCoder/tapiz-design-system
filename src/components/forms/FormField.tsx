import type { BaseProps } from "../../types";
import type { ReactNode } from "react";
import { FieldHint } from "./FieldHint";
import { FieldLabel } from "./FieldLabel";
import { FormError } from "../feedback/FormError";

export interface FormFieldProps extends BaseProps {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
}

export function FormField({ label, hint, error, required, htmlFor, children, className = "" }: FormFieldProps) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label ? <FieldLabel htmlFor={htmlFor}>{label}{required ? " *" : ""}</FieldLabel> : null}
      {children}
      {error ? <FormError message={String(error)} /> : hint ? <FieldHint>{hint}</FieldHint> : null}
    </div>
  );
}
