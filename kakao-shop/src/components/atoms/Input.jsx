const Input = ({
  className,
  type,
  name,
  id,
  value,
  placeholder = "",
  onChange,
}) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
