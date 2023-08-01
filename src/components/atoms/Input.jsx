const Input = ({ type, value, name, onChange, onBlur, placeholder, id }) => {
  return (
    <input
      id={id}
      name={name}
      className="p-7 shawdow-lg bg-white rounded-lg"
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      style={{ width: "900px" }}
    />
  );
};

export default Input;
