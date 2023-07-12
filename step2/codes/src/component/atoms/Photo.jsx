import "../../styles/atoms/Photo.css"

const Photo = ({ className, src, alt }) => {
    // 웹 이미지 최적화, img, source 중에서 최적화 된 것을 보여줄 수 있음
    return (
        <picture className={className}> 
            <source srcSet = {src}/>
            <img src={src} alt={alt}/>
        </picture>
    )
}

export default Photo;