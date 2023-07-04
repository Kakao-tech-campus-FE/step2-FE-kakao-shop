const Button = ({
  onClick, // 클릭 시 실행될 함수
  children // 버튼 내용 텍스트
}) => {
  return (
  <button 
    onClick={(e) => {
      e.preventDefault();
      onClick();}}>
    {children}
  </button>
  )
}

export default Button;