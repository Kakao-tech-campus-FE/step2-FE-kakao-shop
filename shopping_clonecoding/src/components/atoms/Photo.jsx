const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Photo;

// <img> 태그는 기본적으로 src로 가져오는 이미지의 원본 사이즈를 맞춘다.

// 맨 위부터 해당 브라우저에서 호환하는지 체크.
