const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  error,
  onBlur,
}) => {
  return (
    <input
      id={id}
      name={name}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default Input;
