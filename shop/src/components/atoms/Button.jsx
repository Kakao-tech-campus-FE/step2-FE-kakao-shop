// children : prop으로 넘어오는 값을 그대로 반영
// onClick : default 이벤트 방지용 함수
const Button = ({children, onClick, disabled, className}) => {
	return (
		<button className = {`btn-primary ${className}}`} disabled={disabled} onClick={(e) => {
			e.preventDefault()
			onClick()
		}}>
			{children}
		</button>
	)
}

export default Button;