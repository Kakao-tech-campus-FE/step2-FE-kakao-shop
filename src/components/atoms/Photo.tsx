import React from 'react';

interface PhotoProps {
  src: string;
  alt: string;
  setImgLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Photo = ({ src, alt, setImgLoaded }: PhotoProps) => {
  return (
    <picture>
      <img
        src={`${src}`}
        onLoad={(e) => {
          setImgLoaded(true);
        }}
        className="width:inherit"
        alt={alt}
      />
    </picture>
  );
};

export default Photo;
