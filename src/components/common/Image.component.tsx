import { FC } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} />;
};

export default Image;
