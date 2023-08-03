/*eslint-disable react/prop-types */
import "../../styles/atoms/Photo.css";

//Photo components
const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Photo;
