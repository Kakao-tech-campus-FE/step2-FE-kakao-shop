const Photo = ({
    src, alt,
    className = "", // class
    id = "", // id       
    style = {}, // style
     }) => {
    return (
        <picture className={`${className}`} id={id} style={style}>
            <source srcSet={`${src}`} />
            <img src={`${src}`} alt={alt} />
        </picture>
    );
};

export default Photo;
