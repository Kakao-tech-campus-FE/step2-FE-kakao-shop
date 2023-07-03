const Input = ({
  type,
  value,
  onChange,
  placeholder,
  className,
  id,
  name,
}) => {
  return <input
            name={name} 
            type={type}
            id={id}
            className={className} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
             />;
}
export default Input;