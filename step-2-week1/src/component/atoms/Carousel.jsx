import React, { useState } from 'react';
import firstImage from '../../img/carouselItem1.jpeg';
import secondImage from '../../img/carouselItem2.jpeg';
import thirdImage from '../../img/carouselItem3.jpeg';
import '../../../src/styles/atoms/Carousel.css';
// (다른 이미지들도 추가로 import할 수 있습니다.)

const Carousel = () => {
    const images = [firstImage, secondImage, thirdImage];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPreviousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <button className="carousel-button" onClick={goToPreviousSlide}>Previous</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="carousel-button" onClick={goToNextSlide}>Next</button>
      </div>
    );
  };

export default Carousel;
