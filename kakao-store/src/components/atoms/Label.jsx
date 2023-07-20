/**
 * 라벨 컴포넌트 생성
 * @param {string} htmlFor - for attr.
 * @param {React.ReactNode} children
 * @param {string} className 
 * @returns 라벨 컴포넌트
 */
const Label = ({ htmlFor, children, className}) => {
	return (
		<label htmlFor={htmlFor} className={className}>
			{children}
		</label>
	);
}

export default Label;