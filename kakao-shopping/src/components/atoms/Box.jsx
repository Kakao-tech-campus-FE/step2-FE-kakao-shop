const Box = ({
    className = "", // class
    children, // 자식 Component
    ...props
}) => {
    return (
        <div className={`box border rounded p-1 m-1 ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Box;
