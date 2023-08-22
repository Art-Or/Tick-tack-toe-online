import clsx from "clsx";

/**
 * @param {{
 * helperText: string;
 * errorText: string
 * }} props
 * @returns {JSX.Element|null}
 */

/**
 * @param {Object} props
 * @param {String} props.helperText
 * @param {String} props.errorText
 * @returns {JSX.Element|null}
 */

export function UiFieldMessage({ helperText, errorText }) {
  const isError = !!errorText;
  const messageText = errorText || helperText;

  return (
    <p
      className={clsx(
        "mt-1 text-sm",
        errorText ? "text-orange-600" : "text-slate-400"
      )}
    >
      {messageText}
    </p>
  );
}
