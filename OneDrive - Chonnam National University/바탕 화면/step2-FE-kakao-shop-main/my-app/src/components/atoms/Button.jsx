const Button = ({children, onClick}) => {
	return (
		<button onClick={(e) => {
			e.preventDefault()
			onClick()
		}}>
			{children}
		</button>
	)
}

export default Button;

// button은 기본적으로 submit을 보내서 페이지를 리렌더링 시킨다.
// onClick 메서드를 통해 관리를 해줄 필요가 있다. e.preventDefault();