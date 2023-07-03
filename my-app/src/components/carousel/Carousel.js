import React, { useState } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={handlePrev}>
        &lt;
      </button>
      <img className="slide" src={images[currentIndex]}  style={{ width: '500px', height: '300px' }} alt="Carousel Slide" />
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
