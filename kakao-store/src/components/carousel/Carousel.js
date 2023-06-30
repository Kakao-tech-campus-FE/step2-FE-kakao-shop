import React, { useState } from 'react';
import './Carousel.css'; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={handlePrev}>
        Prev
      </button>

      <div className="carousel-content">
        {images.map((image, index) => (
          <img
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            src={image}
            alt={`Carousel Image ${index}`}
          />
        ))}
      </div>

      <button className="carousel-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
  
};

export default Carousel;
