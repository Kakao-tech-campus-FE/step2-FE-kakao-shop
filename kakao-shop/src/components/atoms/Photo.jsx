/**
 * picture 태그를 이용한 이미지 컴포넌트
 * @param {string} className
 * @param {string} src 이미지 경로
 * @param {string} alt 대체 텍스트
 */
const Photo = ({ className, src, alt }) => {
  return (
    <picture>
      <source srcSet={src} />
      <img src={src} alt={alt} className={`rounded-md ${className}`} />
    </picture>
  );
};

export default Photo;
