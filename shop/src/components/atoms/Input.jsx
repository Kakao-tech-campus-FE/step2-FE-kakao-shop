// css를 위한 className
const Input = ({type, value, name, onChange, onBlur, placeholder, className="", id}) => {
  return (
    <input 
      id={id}
      name={name}
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type={type} 
      value={value} 
      onChange={onChange} 
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}

export default Input;