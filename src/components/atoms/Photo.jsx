import "../../styles/atoms/Photo.css";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source className="border-0" srcSet={src} />
      <img className="border-1 rounded-lg w-96" src={staticServerUri + src} alt={alt} />
    </picture>
  );
};

export default Photo;
