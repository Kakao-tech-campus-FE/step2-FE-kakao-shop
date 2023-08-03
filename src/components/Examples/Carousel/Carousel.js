import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const staticServerUri = process.env.REACT_APP_PATH || "";

export const RadioIndicator = ({ index, currentSlide, onClick }) => {
  return (
    <span>
      <input
        type="radio"
        className="radio-indicator"
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

export const Carousel = () => {
  const images = [
    staticServerUri + "/images/carouselItem1.jpeg",
    staticServerUri + "/images/carouselItem2.jpeg",
    staticServerUri + "/images/carouselItem3.jpeg"
  ];
  const LAST_SLIDE_INDEX = images.length - 1;

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

  const dragThreshold = 100;

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      const dragDistance = endDrag - startDrag;

      if (dragDistance > dragThreshold) {
        prevSlide();
      } else if (dragDistance < -dragThreshold) {
        nextSlide();
      }
    }
  };

  const nextSlide = () => {
    if (currentSlide >= LAST_SLIDE_INDEX) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(LAST_SLIDE_INDEX);
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
        {
          images.map((_, index) => (
            <RadioIndicator
              index={index}
              currentSlide={currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))
        }
      </div>
      <div
        ref={slideRef}
        className="carousel-slider-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {
          images.map((image, _) => (
            <Slide img={image} />
          ))
        }
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
