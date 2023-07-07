const Container = ({
    className, // class
    id, // id
    children, // 자식 Component
    style, // style
}) => {
    return (
        <div className={`container ${className}`} id={id} style={style}>
            {children}
        </div>
    );
};

export default Container;
