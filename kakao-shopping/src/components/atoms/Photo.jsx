const Photo = ({
    src, // 이미지 주소
    alt, // 이미지 설명
    objectFit = "contain",
    className = "", // class
    id = "", // id
    style = {}, // style
}) => {
    return (
        <picture className={`d-block ${className}`} id={id} style={style}>
            <source className={`object-fit-${objectFit}`} srcSet={`${src}`} />
            <img
                className={`object-fit-${objectFit}`}
                src={`${src}`}
                alt={alt}
            />
        </picture>
    );
};

export default Photo;
