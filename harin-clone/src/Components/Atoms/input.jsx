const Input = ({ type, value, onChange, placeholder, className, id, name }) => { // 인풋: 
  return (
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className={className}
      id={id}
      name={name}
    />
  );
};

export default Input;