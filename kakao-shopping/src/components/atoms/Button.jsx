const Button = ({
    onClick, // Input의 값이 바뀌었을 때의 handler
    className = "", // class
    children, // 자식 Component
    ...props
}) => {
    return (
        <button
            className={`button border-0 fw-bold rounded ${className}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
