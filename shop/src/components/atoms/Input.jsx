// css를 위한 className
const Input = ({type, value, name, onChange, placeholder, className="", id}) => {
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
  )
}

export default Input;