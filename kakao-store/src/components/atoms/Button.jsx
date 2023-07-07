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