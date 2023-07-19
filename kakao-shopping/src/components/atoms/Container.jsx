const Container = ({
    className = "", // class
    id = "", // id
    style = {}, // style
    children, // 자식 Component
}) => {
    return (
        <div className={`cont ${className}`} id={id} style={style}>
            {children}
        </div>
    );
};

export default Container;
