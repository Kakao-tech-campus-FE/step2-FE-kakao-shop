const Container = ({
    className = "", // class
    children, // 자식 Component
    ...props
}) => {
    return (
        <div className={`cont ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Container;
