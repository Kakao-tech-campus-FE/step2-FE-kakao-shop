const Button = ({
    onClick, // Input의 값이 바뀌었을 때의 handler
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // 자식 Component
}) => {
    return (
        <button
            className={`button border-0 fw-bold rounded ${className}`}
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
