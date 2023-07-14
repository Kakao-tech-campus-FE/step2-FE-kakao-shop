const Photo = ({ className, src, alt }) => {
    const styleObj = {
        card: "w-[270px] h-[200px] rounded-lg",
    }

    return (
        <picture>
            <source srcSet={src} />
            <img className={` ${styleObj[className]}`} src={src} alt={alt} />
        </picture>
    )
}

export default Photo;