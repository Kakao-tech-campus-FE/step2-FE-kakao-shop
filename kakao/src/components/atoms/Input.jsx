const Input = ({ className, name, type, value, onChange, placeholder, id }) => {
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
};

export default Input;
