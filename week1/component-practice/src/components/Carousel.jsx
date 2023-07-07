import React, { useState, useEffect } from "react";
import "../styles/Carousel.css";

const Carousel = ({ slides, time = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, time);

    return () => {
      clearInterval(slideInterval);
    };
  }, [time]);

  return (
    <div className="carousel">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="arrow prev" onClick={goToPrevSlide}>
          〈
        </button>
        <button className="arrow next" onClick={goToNextSlide}>
          〉
        </button>
      </div>

      <ul className="indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            className={`${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
