import React, { useState } from 'react';
import './Carousel.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6];

  const handlePrevButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='carousel'>
      <button type='button' onClick={handlePrevButtonClick}>
        {'<'}
      </button>
      <img width='200px' src={images[currentIndex]} alt='이미지' />
      <button type='button' onClick={handleNextButtonClick}>
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
