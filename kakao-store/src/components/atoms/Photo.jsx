const Photo = ({ className, src, alt }) => {
    const styleObj = {
        card: "w-[270px] h-[200px] rounded-lg",
        product: "w-[430px] h-[430px]"
    }

    return (
        <picture>
            <source srcSet={src} />
            <img className={` ${styleObj[className]}`} src={src} alt={alt} />
        </picture>
    )
}

export default Photo;