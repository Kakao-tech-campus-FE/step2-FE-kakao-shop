/**
 * Input component
 * id: id attribute
 * name: name attribute
 * type: type attribute
 * value: value attribute
 * onChange: event handler
 * placeholder: placeholder attribute
 * className: custom class name
 */
export default function Input({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
}) {
  return (
    <input
      id={id}
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
