const Label = ({
    htmlFor, // for
    children, // 자식 Component
    id, // id
    className, // class
    style, // style
}) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`label ${className}`}
            id={id}
            style={style}
        >
            {children}
        </label>
    );
};

export default Label;
