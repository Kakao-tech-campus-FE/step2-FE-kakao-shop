const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} className={className} />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

export default Photo;
