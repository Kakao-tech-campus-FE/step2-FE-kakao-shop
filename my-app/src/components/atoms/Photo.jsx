import "../../styles/atoms/Photo.css";

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source className="border-0" srcSet={src} />
      <img className="border-0" src={src} alt={alt} />
    </picture>
  );
};

export default Photo;
