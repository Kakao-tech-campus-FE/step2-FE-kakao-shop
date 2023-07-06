import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

export const RadioIndicator = ({ index, currentSlide, onClick }) => {
  return (
    <span>
      <input
        type="radio"
        className="radio-indicator"
        id={`radio-indicator-${index}`}
        checked={index === currentSlide}
        onChange={() => onClick(index)}
      />
      <label
        htmlFor={`radio-indicator-${index}`}
        className="radio-indicator-label"
        onClick={() => onClick(index)}
      ></label>
    </span>
  );
};

const preventImageDrag = (e) => {
  e.preventDefault();
};

export const Slide = ({ img }) => {
  return (
    <img
      src={img}
      className="carousel-img"
      onDragStart={(e) => preventImageDrag(e)}
    />
  );
};

const TOTAL_SLIDES = 2;

export const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState(0);
  const [endDrag, setEndDrag] = useState(0);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartDrag(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setEndDrag(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      const dragDistance = endDrag - startDrag;

      if (dragDistance > 100) {
        prevSlide();
      } else if (dragDistance < -100) {
        nextSlide();
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="carousel-container">
      <div className="radio-indicator-container">
        <RadioIndicator
          index={0}
          currentSlide={currentSlide}
          onClick={() => setCurrentSlide(0)}
        />
        <RadioIndicator
          index={1}
          currentSlide={currentSlide}
          onClick={() => setCurrentSlide(1)}
        />
        <RadioIndicator
          index={2}
          currentSlide={currentSlide}
          onClick={() => setCurrentSlide(2)}
        />
      </div>
      <div
        ref={slideRef}
        className="carousel-slider-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {props.images.map((image, _) => (
          <Slide img={image} />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};
