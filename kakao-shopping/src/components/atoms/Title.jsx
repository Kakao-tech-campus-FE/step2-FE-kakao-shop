const Title = ({
    children, // 자식 Component
    className = "", // class
    ...props
}) => {
    return (
        <h1 className={`label fw-bolder fs-1 ${className}`} {...props}>
            {children}
        </h1>
    );
};

export default Title;
