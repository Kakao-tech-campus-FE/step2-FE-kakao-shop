const Photo = ({ className, src, alt }) => {
    const styleObj = {
        card: "w-px-200",
    }

    return (
        <picture className={`${styleObj[className]}`}>
            <source srcSet={src} />
            <img className="w-inherit" src={src} alt={alt} />
        </picture>
    )
}

export default Photo;