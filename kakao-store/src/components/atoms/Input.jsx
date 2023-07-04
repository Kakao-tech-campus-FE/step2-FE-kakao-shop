const Input = () => ({ type, value, onChange, placeholder, className, id}) => {
  return (
    <input
      id = {id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;