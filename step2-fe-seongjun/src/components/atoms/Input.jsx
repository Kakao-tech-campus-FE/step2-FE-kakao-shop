const Input = ({type, value, onChange, placeholder, className, id, name, onBlur}) => {
  return (
    <input
      id={id} /* label과 연결해서 쓸 때 유용*/
      name= {name}
      className = {className}
      type = {type}
      value = {value}
      onChange = {onChange}
      placeholder = {placeholder}
      onBlur={onBlur}
    />
  );
};

export default Input;