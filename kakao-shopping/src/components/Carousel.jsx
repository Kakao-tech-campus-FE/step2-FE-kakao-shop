import { useState } from 'react';

const images = [
  '/assets/test1.png',
  '/assets/test2.png',
  '/assets/test3.png',
  '/assets/test4.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toPreviousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    }
    else
      setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const toNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    }
    else
      setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const carouselStyle = {
    width:"200px",
    height:"200px",
    overflow: "hidden",
  };
  const transformStyle = {
    display:"flex",
    width: `${200 * images.length}px`,
    transform: `translate3d(-${200 * currentIndex}px, 0, 0)`,
    transition: "transform 0.5s ease"
  };

  return (
    <>
    <h1>Carousel</h1>
    <div className="carousel" style={carouselStyle}>
      <div className="slide-container" style={transformStyle}>
        {images.map((image, index) => (
          <img
            src={image}
            alt={`${index}th pic is missing`}
            key={index}
            style={{
              width: '200px',
              height: '200px',
            }}
          />
        ))}
      </div>
    </div>
      <button className="prev" onClick={toPreviousSlide}>
        Previous
      </button>
      <button className="next" onClick={toNextSlide}>
        Next
    </button>
    </>
  );
};

export default Carousel;