const Photo = ({ src, alt }) => {
  return (
    <picture>
      <source
        srcSet={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`}
      />
      <img
        src={`http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com${src}`}
        alt={alt}
      />
    </picture>
  );
};

export default Photo;
