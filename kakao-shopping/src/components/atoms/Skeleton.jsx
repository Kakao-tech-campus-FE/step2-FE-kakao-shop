const Skeleton = ({
    type = "",
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
        <div
            className={`skeleton ${type} ${className}`}
            id={id}
            style={style}
        ></div>
    );
};

export default Skeleton;
