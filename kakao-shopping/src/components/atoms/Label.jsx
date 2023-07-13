const Label = ({
    htmlFor, // for
    id = "", // id
    className = "", // class
    style = {}, // style
    children, // 자식 Component
}) => {
    return (
        <label
            htmlFor={htmlFor ? htmlFor : ""}
            className={`label ${className}`}
            id={id}
            style={style}
        >
            {children}
        </label>
    );
};

export default Label;
