const Photo = ({ src, alt, className, imgAnimation = "" }) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img
        className={imgAnimation}
        src={src}
        alt={alt}
        style={{
          aspectRatio: "inherit",
          width: "inherit",
          height: "inherit",
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
    </picture>
  );
};

export default Photo;
