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
  const inputClasses = `w-full px-4 py-3 rounded-lg bg-gray-100 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none ${className}`;

  return (
    <input
      id={id}
      name={name}
      className={inputClasses}
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
