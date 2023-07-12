import React, { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>이전 음식</button>
    
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} />
    
      <button onClick={goToNextSlide}>다음 음식</button>
    </div>
  );
};

export default Carousel;