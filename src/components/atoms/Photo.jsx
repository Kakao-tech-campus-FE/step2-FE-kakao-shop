import "../../styles/atoms/Photo.css";
const staticServerUrl = process.env.REACT_APP_PATH || "";

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={staticServerUrl + src} />
      <img src={staticServerUrl + src} alt={alt} />
    </picture>
  );
};

export default Photo;