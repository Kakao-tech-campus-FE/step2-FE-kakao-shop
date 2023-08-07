// htmlFor: label이 연결되는 폼 요소의 id
// children : label 이름
const Label= ({htmlFor, children, className}) => {
  return (
    <label htmlFor={htmlFor} className={className}> {/* for와 id가 같아야 함 */}
      {children}
    </label>
  )
}

export default Label;