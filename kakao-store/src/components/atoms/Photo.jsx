/**
 * 사진 컴포넌트
 *
 * @param {string} src - 이미지 경로
 * @param {string} alt - 이미지 설명
 * @returns
 */

const Photo = ({ src, alt, className }) => {
  return (
    <picture>
      <source srcSet={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`} />
      <img
        src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default Photo;
