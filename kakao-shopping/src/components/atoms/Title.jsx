const Title = ({
    children, // 자식 Component
    id = "", // id
    className = "", // class
    style = {}, // style
}) => {
    return (
        <h1
            className={`label fw-bolder fs-1 ${className}`}
            id={id}
            style={style}
        >
            {children}
        </h1>
    );
};

export default Title;
