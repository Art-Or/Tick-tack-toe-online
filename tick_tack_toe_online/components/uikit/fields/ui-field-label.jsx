import clsx from "clsx";

/**
 * @param {{
 * required: boolean;
 * label: string;
 * }} props
 * @returns {JSX.Element|null}
 */

export function UiFieldLabel({ label, required }) {
  return (
    <label
      for="example2"
      className={clsx(
        required && "after:text-orange-600 after:content-['*']",
        "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5"
      )}
    >
      {label}
    </label>
  );
}
