const Button = ({
    onClick, // Input의 값이 바뀌었을 때의 handler
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // 자식 Component
}) => {
    return (
        <button
            className={`button border-0 ${className}`}
            id={id}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            style={{ backgroundColor: "rgb(254,229,0)", ...style }}
        >
            {children}
        </button>
    );
};

export default Button;
