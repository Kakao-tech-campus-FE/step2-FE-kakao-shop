export default function Input({
  id,
  name,
  className = "",
  type,
  onChange,
  placeholder,
  value,
}) {
  return (
    <input
      id={id}
      name={name}
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    ></input>
  );
}
