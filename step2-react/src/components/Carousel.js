import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImage]} alt="carousel" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
