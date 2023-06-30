import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";
import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'
import slide4 from '../images/slide4.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImage, setVisibleImage] = useState(0);

  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
  ];

  useEffect(() => {
    setVisibleImage(currentIndex);
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevClick}>{`<<`}</button>
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="visible"
      />
      <button onClick={handleNextClick}>{`>>`}</button>
    </div>
  );
};

export default Carousel;
