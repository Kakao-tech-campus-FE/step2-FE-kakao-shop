const Photo = ({
    src, // 이미지 주소
    alt, // 이미지 설명
    objectFit = "contain",
    className = "", // class
    ...props
}) => {
    return (
        <picture className={`d-block ${className}`} {...props}>
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
