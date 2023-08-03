const Photo = ({ src, alt, imgClass }) => {
  const staticServerUri = process.env.REACT_APP_PATH || "";

  return (
    <picture>
      <img className={imgClass} src={staticServerUri + "/api" + src} alt={alt} />
    </picture>
  );
};

export default Photo;
