const Title = ({
    children, // 자식 Component
    id, // id
    className, // class
    style, // style
}) => {
    return (
        <h1 className={`label ${className}`} id={id} style={style}>
            {children}
        </h1>
    );
};

export default Title;
