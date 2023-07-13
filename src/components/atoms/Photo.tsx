import React from 'react';

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo = ({ src, alt }: PhotoProps) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} />
      <source srcSet={`${src}.png`} />
      <source srcSet={`${src}.webm`} />
      <img src={`${src}.webp`} className="width:inherit" alt={alt} />
    </picture>
  );
};

export default Photo;
