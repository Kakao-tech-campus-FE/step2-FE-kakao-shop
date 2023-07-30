const Skeleton = ({
    type = "",
    className = "", // class
    ...props
}) => {
    return <div className={`skeleton ${type} ${className}`} {...props}></div>;
};

export default Skeleton;
