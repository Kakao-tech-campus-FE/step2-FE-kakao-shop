import "../../styles/atoms/Photo.css"

const staticServerUrl = process.env.REACT_APP_PATH || "";
const Photo = ({ className, src, alt }) => {
    // 웹 이미지 최적화, img, source 중에서 최적화 된 것을 보여줄 수 있음
    return (
        <picture className={className}> 
            <source srcSet = {staticServerUrl + src}/>
            <img src={staticServerUrl + src} alt={alt}/>
        </picture>
    )
}

export default Photo;