
const Input = ({type, value, name, onChange, onBlur, placeholder, id}) => {

  const inputDesign = `p-4 w-96 border-b-4 text-xl focus:outline-none focus:border-black`
  return (
    <input 
      id={id}
      name={name}
      className={inputDesign}
      type={type} 
      value={value} 
      onChange={onChange} 
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}

export default Input;