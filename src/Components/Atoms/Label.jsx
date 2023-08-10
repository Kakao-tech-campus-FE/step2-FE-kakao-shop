const Label = ({ htmlFor, children, className }) => { // label의 htmlFor, 내용, 속성
  return (
    <label htmlFor={htmlFor} className={`label p-3 ${className}`}>
      {children}
    </label>
  )
}

export default Label;