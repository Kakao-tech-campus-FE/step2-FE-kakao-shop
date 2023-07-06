const Button = ({
    onClick, // Input의 값이 바뀌었을 때의 handler
    className, // class
    id, // id
    children, // 자식 Component
    style, // style
}) => {
    return (
        <button
            className={`button ${className}`}
            id={id}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
