import { useState } from "react";

const Photo = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  src = process.env.REACT_APP_API_URL + src;

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <picture>
        <source srcSet={src} />
        <img
          src={src}
          alt={alt}
          className={`object-fill h-44 w-full transition-transform duration-500 ease-in-out ${
            isHovered ? "transform scale-110" : ""
          }`}
        />
      </picture>
    </div>
  );
};

export default Photo;
