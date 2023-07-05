const Input = ({
  className,
  type,
  name,
  id,
  value,
  placeholder = "",
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <input
      className={`input focus:outline-none ${className}`}
      type={type}
      name={name}
      id={id}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
