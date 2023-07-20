import "../../styles/atoms/Photo.css"

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} height={300} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Photo;