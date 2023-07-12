const Input = ({type, value, name, onChange, placeholder, className, id}) => {
  return (
    <input 
      // id는 label과 함께 사용하기 위해 필요하다.
      id={id} 
      className={className}
      type={type} 
      name={name}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
    />
  )
}

export default Input;