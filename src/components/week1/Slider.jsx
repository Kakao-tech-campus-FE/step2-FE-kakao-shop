import React, { useEffect, useRef, useState } from 'react';
import Slide from './Slide';
import img1 from '../assets/duck1.png';
import img2 from '../assets/duck2.png';
import img3 from '../assets/duck3.png';
import '../styles/Slider.css';

const TOTAL_SLIDES = 2;

 const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className="container">
      <div className='sliderContainer' ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </div>
      <div className='center'>
        <div className='button' onClick={PrevSlide}>Prev</div>
        <div className='button' onClick={NextSlide}>Next</div>
      </div>
    </div>
  );
}

export default Slider;