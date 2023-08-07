const Label = ({
  htmlFor, //label 요소와 연결된 input 요소의 id값
  children, //label 컴포넌트의 내용
  className //label의 클래스 이름
}) => {
  return (
    <label
    htmlFor={htmlFor}
    className={className}>
      {children}
    </label>
  )
}

export default Label;