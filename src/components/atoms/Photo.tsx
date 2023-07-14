import React from 'react';

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
  return (
    <picture>
      <img src={`${src}`} className="width:inherit" alt={alt} />
    </picture>
  );
};

export default Photo;
