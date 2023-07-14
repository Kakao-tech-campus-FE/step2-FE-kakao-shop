/** 포토
 *
 * @param {string} className - 로고에 적용할 스타일
 * @param {string} src - 이미지 경로
 * @param {string} alt - 이미지 설명
 * @return {JSX.Element}
 */
const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} className={className} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

export default Photo;
