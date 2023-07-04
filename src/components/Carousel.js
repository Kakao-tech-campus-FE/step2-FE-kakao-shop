import { useState, useEffect } from "react";

// css
import "../styles/Carousel.css";

export default function Carousel({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="carousel-div">
      <img
        className="carousel-img"
        src={images[selectedIndex]}
        alt={"carouselItem" + (selectedIndex + 1)}
      />
      <span className="carousel-span">
        {images.map((_, index) => (index === selectedIndex ? "■" : "○"))}
      </span>
      <button
        className="carousel-button carousel-button-left"
        onClick={prevImage}
      >
        {"<"}
      </button>
      <button
        className="carousel-button carousel-button-right"
        onClick={nextImage}
      >
        {">"}
      </button>
    </div>
  );
}
