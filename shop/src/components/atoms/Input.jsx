// css를 위한 className
const Input = ({type, value, name, onChange, onBlur, placeholder, id}) => {
  return (
    <input 
      id={id}
      name={name}
      className="p-6 shawdow-lg bg-white rounded-lg"
      type={type} 
      value={value} 
      onChange={onChange} 
      onBlur={onBlur}
      placeholder={placeholder}
      style={{width:'900px'}}
    />
  )
}

export default Input;