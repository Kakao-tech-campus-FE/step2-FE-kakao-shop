import "../../../styles/atoms/Photo.css";

/**
 * 이미지 tag를 포함한 picture tag
 * @param {string} className className
 * @param {string} src 이미지 주소
 * @param {string} alt 이미지 설명
 * @returns picture tag
 */
export default function Photo({ className = "", src, alt }) {
  return (
    <picture className={className}>
      {/* source 선택 기준: 상단부터 브라우저 호환이 될 경우 선택한다 -> 이미지의 src가 됨 */}
      <source srcSet={`${src}`} />
      <img src={`${src}`} alt={alt} />
    </picture>
  );
}

// ⭐️picture tag의 장점(than img)
// 1. SEO
// 2. source tag를 사용하여 미디어쿼리 다중이미지 제공
// 3. 웹 이미지 최적화(source: JPEG, WebP, PNG 등 다양한 이미지 포맷의 이미지를 제공)
