import React from 'react';
import '../../styles/atoms/Photo.css';

const Photo = ({ className, src, alt }) => {
  console.log(process.env.REACT_APP_API_URL + src);
  return (
    <picture className={className}>
      <source srcSet={process.env.REACT_APP_API_URL + src} />
      <img src={process.env.REACT_APP_API_URL + src} alt={alt} />
    </picture>
  );
};

export default Photo;
