const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className='label p-3'>
      {children}
    </label>
  )
}

export default Label;