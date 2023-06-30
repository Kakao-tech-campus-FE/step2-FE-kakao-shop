// indicator의 경우 실제 사이트에 상호작용이 없기에 간소화함

// package
import { useState, useEffect } from "react";

// css
import "../styles/Carousel.css";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {}, [currentIndex]);

  return (
    <div className="carousel-div">
      <img
        className="carousel-img"
        src={images[currentIndex]}
        alt={"carouselItem" + (currentIndex + 1)}
      />
      <span className="carousel-span">
        {images.map((_, index) => (index === currentIndex ? "■" : "○"))}
      </span>
      <button className="carousel-button carousel-button-left" onClick={prevImage}>
        {"<"}
      </button>
      <button className="carousel-button carousel-button-right" onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
}
