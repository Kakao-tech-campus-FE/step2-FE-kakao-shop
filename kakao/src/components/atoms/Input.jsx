const Input = ({
  className,
  name,
  type,
  value,
  onChange,
  placeholder,
  id,
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
      onBlur={onBlur}
    />
  );
};

export default Input;
