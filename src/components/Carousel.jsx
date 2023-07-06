import React, { useEffect, useRef, useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import '../styles/Carousel.css';

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    const handleMouseEnter = (event) => {
      event.target.style.backgroundColor = '#becfe0';
    };

    const handleMouseLeave = (event) => {
      event.target.style.backgroundColor = '';
    };

    prevButton.addEventListener('mouseenter', handleMouseEnter);
    prevButton.addEventListener('mouseleave', handleMouseLeave);
    nextButton.addEventListener('mouseenter', handleMouseEnter);
    nextButton.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      prevButton.removeEventListener('mouseenter', handleMouseEnter);
      prevButton.removeEventListener('mouseleave', handleMouseLeave);
      nextButton.removeEventListener('mouseenter', handleMouseEnter);
      nextButton.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) => (prevImage + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="carousel-image" />
      <div className="carousel-buttons">
        <button ref={prevButtonRef} className="carousel-button" onClick={handlePrevClick}>
          Prev
        </button>
        <button ref={nextButtonRef} className="carousel-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
