/* eslint-disable */
import { useState } from 'react';
import '../../styles/Carousel.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import React from 'react';
const Carousel = ({ background }) => {
  const [imgIndex, setImageIndex] = useState(0);

  const changeSlide = (plusIndex) => {
    setImageIndex((imgIndex + plusIndex + background.length) % background.length);
  };

  return (
    <div className="wrapper">
      {[-1, 0, 1].map((key) => (
        <div
          className="image"
          key={key}
          style={{
            backgroundImage: `url(${background[imgIndex]})`,
          }}
        />
      ))}
      <BsChevronLeft className="arrowLeft" size="25" color="white" onClick={() => changeSlide(-1)} />
      <BsChevronRight className="arrowRight" size="25" color="white" onClick={() => changeSlide(1)} />
    </div>
  );
};

export default Carousel;
