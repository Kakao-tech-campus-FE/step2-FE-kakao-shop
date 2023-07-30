const Label = ({
    htmlFor, // for
    className = "", // class
    children, // 자식 Component
    ...props
}) => {
    return (
        <label
            htmlFor={htmlFor ? htmlFor : ""}
            className={`label ${className}`}
            {...props}
        >
            {children}
        </label>
    );
};

export default Label;
