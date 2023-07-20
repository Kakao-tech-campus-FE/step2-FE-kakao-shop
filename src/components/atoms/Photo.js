// className(CSS 적용 위한 클래스명), src(이미지 경로), alt(대체 텍스트)
export default function Photo({ className = "", src, alt }) {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  );
}
