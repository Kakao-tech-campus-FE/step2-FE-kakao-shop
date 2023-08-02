import { FC } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={process.env.VITE_BASE_URL + src}
      alt={alt}
    />
  );
};

export default Image;
