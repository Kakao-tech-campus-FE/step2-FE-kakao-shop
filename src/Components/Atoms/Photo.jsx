const Photo = ({ src, alt, imgClass }) => {
  return (
    <picture>
      <img className={imgClass} src={process.env.REACT_APP_API_URL + src} alt={alt} />
    </picture>
  );
};

export default Photo;
