/**
 * 버튼 컴포넌트 생성
 * @param {function} onClick - 클릭 핸들러 함수
 * @param {React.ReactNode} children
 * @param {string} className 
 * @returns 버튼 컴포넌트 
 */
const Button = ({ onClick, children, className }) => {
	return (
		<button className={`whitespace-nowrap ${className}`}
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}>
				{children}
			</button>
	);
}

export default Button;