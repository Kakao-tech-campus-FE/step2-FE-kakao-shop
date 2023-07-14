const Photo = ({ className ,src, alt}) => {
    return(
        <picture>
            <source srcSet={src}/>
            <img src={src} alt={alt}/>
        </picture>
    );
};

export default Photo;