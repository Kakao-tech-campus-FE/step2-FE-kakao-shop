/**
 * Label component
 * htmlFor: defines which form element a label is bound to
 * children: label text
 * className: custom class name
 */
export default function Label({ htmlFor, children, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
