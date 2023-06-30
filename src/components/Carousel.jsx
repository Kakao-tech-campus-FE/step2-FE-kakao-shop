import React, { useState } from 'react';
import '../App.css';

const slides = [
  { id: 1, color: '#88b04b' },
  { id: 2, color: '#f7cac9' },
  { id: 3, color: '#8ca4cf' },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className='carousel'>
      <div className='slides'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundColor: slide.color }}
          />
        ))}
      </div>
      <button className='prev-button' onClick={handlePrev}>
        Prev
      </button>
      <button className='next-button' onClick={handleNext}>
        Next
      </button>
    </div>
  );
}
