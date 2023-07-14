const Input = ({
  id,
  className,
  type,
  value,
  name,
  onChange,
  placeholder,}) => {
  return <input id={id} className={className} type={type} value={value} name={name} onChange={onChange} placeholder={placeholder}></input>
}
 
export default Input