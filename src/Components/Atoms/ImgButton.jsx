const ImgButton = ({ onClick, btnClass, imgClass, disabled, src, alt }) => {
  return (
    <button
      className={btnClass}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      disabled={disabled ? disabled : false}
    >
      <img src={src} alt={alt} className={imgClass} />
    </button>
  );
};

export default ImgButton;
