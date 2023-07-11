const Button = ({onClick, children}) => {
   //'onClick' : 버튼이 클릭 되었을 때 이벤트 값을 받음
  //'children' : button 내부에 표시 될 내용 
  return (
    <button 
    onClick = {(e) => {
      e.preventDefault();
      onClick(); 
    }}>
      {/* onClick이벤트 정의 할 때 preventDefault 해주면 안되는지? */}
    {children}
    </button>
  )
}
export default Button;