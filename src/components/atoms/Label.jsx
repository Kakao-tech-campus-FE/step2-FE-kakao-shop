const Label = ({ htmlFor, className, children}) =>{
// 'htmlFor': input 요소와 연결된 label 요소의 'for' 속성을 설정
// 'children': label 요소 내부에 표시될 내용을 지정
// 'className': label 요소에 추가로 적용할 CSS 클래스를 지정

  return (
    <label 
    htmlFor= {htmlFor}
    className= {className}>
      {children}
    </label>
  )
}
export default Label;