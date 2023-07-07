import "../../styles/index.css";
const Input = ({ type, value, onChange, placeholder, id, name }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  );
};

export default Input;
