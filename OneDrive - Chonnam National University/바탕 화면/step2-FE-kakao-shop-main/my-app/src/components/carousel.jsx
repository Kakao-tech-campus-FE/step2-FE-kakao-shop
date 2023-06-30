import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={goToPreviousImage}>
        &lt;
      </button>
      <img src={images[currentImageIndex]} alt="Carousel" className="carousel-image" />
      <button className="carousel-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;