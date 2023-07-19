const Photo = ({
    src, // 이미지 주소
    alt, // 이미지 설명
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
        <picture className={`d-block ${className}`} id={id} style={style}>
            <source srcSet={`${src}`} />
            <img src={`${src}`} alt={alt} />
        </picture>
    );
};

export default Photo;
