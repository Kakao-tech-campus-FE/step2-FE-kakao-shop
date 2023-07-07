const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className = "",
  id,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
