const Icon = ({
    icon, // 아이콘 명
    className = "", // class
    ...props
}) => {
    return (
        <span className={`material-symbols-outlined ${className}`} {...props}>
            {icon}
        </span>
    );
};

export default Icon;
