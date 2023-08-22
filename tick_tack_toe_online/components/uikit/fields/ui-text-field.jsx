import clsx from "clsx";
import { UiFieldLabel } from "./ui-field-label";
import { UiFieldInput } from "./ui-field-input";
import { UiFieldMessage } from "./ui-field-message";

/**
 * @param {{
 * label?: string,
 * required: boolean,
 * helpertext?: string,
 * errorText?: string,
 * className: string,
 * }& import('react').HTMLAttributes<HTMLInputElement>} props
 * @returns {JSX.Element}
 */

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
