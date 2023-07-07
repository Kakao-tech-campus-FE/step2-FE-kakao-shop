import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <img className="carousel-image" src={images[currentIndex]} alt="Carousel Image" />
      <button className="carousel-button prev-button" onClick={handlePrev}>
        Previous
      </button>
      <button className="carousel-button next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
