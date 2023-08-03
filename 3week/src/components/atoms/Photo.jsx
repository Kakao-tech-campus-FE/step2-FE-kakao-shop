import "../../styles/atoms/Photo.css";

const Photo = ({ className, src, alt }) => {
  // className 추가적인 스타일을 적용하기 위한 클래스 이름
  // src 이미지의 경로
  // alt 대체 텍스트로 이미지를 설명하는 내용
  return (
    <picture className={className}>
      {/* img 태그보다 SEO(search engine optimazation)에 유리하다. 
      아래 두 태그를 받을 수 있기 때문 */}
      <source srcSet={process.env.REACT_APP_API_URL.slice(0, -1) + src} />{" "}
      {/* 웹 이미지 최적화, 최적화된 이미지 포맷을 호환 */}
      <img src={process.env.REACT_APP_API_URL.slice(0, -1) + src} alt={alt} />
      {/* 위와 같이 작성할 경우 브라우저가 가장 호환하는, 제일 용량이 적은걸 기준으로 이미지 출력 */}
    </picture>
  );
};

export default Photo;

// <img> 태그는 기본적으로 src로 가져오는 이미지의 원본 사이즈를 맞춘다. -> 이미지 태그 사이즈 관리 필요
// -> Photo.css로 해결
