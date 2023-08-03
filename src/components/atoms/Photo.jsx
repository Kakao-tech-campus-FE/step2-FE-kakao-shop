import React from 'react';
import '../../styles/atoms/Photo.css';

const staticServerUrl = process.env.REACT_APP_PATH || '';
const Photo = ({ className, src, alt }) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Photo;
