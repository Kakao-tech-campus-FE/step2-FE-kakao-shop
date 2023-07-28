const Photo = ({ className, src, alt }) => {
    return (
        <picture className={`photo ${className} w-[100%]`}>
            <source 
                className={className} 
                srcSet={src} 
            />
            <img 
                className={`${className} w-inherit border border-[0.1px] border-[#f1f1f1]`}
                src={src}
                alt={alt} 
            />
        </picture>
    )
}

export default Photo;