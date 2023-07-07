const Label = ({children, htmlFor}) => {
  return (
    <label htmlFor={htmlFor} className="block mb-4 mt-5 text-xl font-medium leading-6 text-gray-900">
      {children}
    </label>
  )
}

export default Label;