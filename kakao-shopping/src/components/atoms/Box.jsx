const Box = ({
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // 자식 Component
}) => {
    return (
        <div
            className={`box border rounded p-1 m-1 ${className}`}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
};

export default Box;
