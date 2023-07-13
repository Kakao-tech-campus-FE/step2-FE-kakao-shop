const Icon = ({
    icon, // 아이콘 명
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
            <span className={`material-symbols-outlined ${className}`} id={id} style={style}>
                {icon}
            </span>
    );
};

export default Icon;