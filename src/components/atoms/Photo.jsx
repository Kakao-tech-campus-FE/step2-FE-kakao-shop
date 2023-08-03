const Photo = ({ src, alt }) => {
    return (
        <picture>
            <source srcSet={`${src}.webp`}></source>
            <img src={`${src}.jpg`} alt={alt}></img>
        </picture>
    );
};
//picture 은 이미지 태그보다 seo, optimization 에 유리.
//html 에서 기본적으로 제공하는 태그.

//웹 이미지 최적화!! 최적화된 이미지 제공.   ex)webp
//이미지 태그는 기본적으로 소스로 가져오는 이미지의 원본사이즈를 맞춘다.
export default Photo;