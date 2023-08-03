import { staticServerUri } from "../../services/api";

const Photo = ({ className, src, alt }) => {
  src = `${
    process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : ""
  }${src}`;
  return (
    <picture>
      {/* 웹 이미지 최적화, 최적화된 이미즈 포맷을 통해.. 가장 위에서부터 호환이 되는 것을 적용 */}
      <img src={staticServerUri + src} alt={alt} className={className} />
    </picture>
  );
};

export default Photo;
