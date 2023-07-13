const Button = ({
  onClick, // 클릭 시 실행될 함수
  children, // 버튼 내용 텍스트
  className, // 클래스명
}) => {
  return (
  <button 
    className={className}
    onClick={onClick}>
    {children}
  </button>
  )
}

export default Button;