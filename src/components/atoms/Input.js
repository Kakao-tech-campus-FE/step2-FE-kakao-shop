export default function Input({
  id,
  className = "",
  type,
  onChange,
  placeholder,
}) {
  return (
    <input
      id={id}
      className={className}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
}
