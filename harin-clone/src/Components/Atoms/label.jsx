const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className='label'>
      {children}
    </label>
  )
}

export default Label;