// Button
// onClick : 기본내장되어있는 업데이트를 막도록 설정
// children : 무슨버튼인지
function Button({ onClick, children, disabled }) {
  return (
    <button
      onClick={e => {
        e.preventDefault()
        if (!disabled) {
          onClick()
        }
      }}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
