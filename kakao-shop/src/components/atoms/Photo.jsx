const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={{ src }} /> // source가 여러 개면 상단부터 해당
      브라우저에서 호환되는지 체크
      <img src={{ src }} alt={alt} />
    </picture>
  );
};

export default Photo;
