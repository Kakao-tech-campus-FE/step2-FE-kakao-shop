// className(CSS 적용 위한 클래스명), src(이미지 경로), alt(대체 텍스트), srcSet(추가 경로)
export default function Image({ className = null, src, alt, srcSet }) {
  return srcSet ? (
    <picture>
      <source srcSet={srcSet} />
      <img className={className} src={src} alt={alt} />
    </picture>
  ) : (
    <img className={className} src={src} alt={alt} />
  );
}
