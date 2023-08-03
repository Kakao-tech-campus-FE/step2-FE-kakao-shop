import { useState, useEffect } from "react";
import "../../styles/Carousel.css";
import photo1 from "../../assets/carouselItem1.jpeg";
import photo2 from "../../assets/carouselItem2.jpeg";
import photo3 from "../../assets/carouselItem3.jpeg";

const photos = [
  {
    id: "p1",
    title: "photo1",
    url: photo1,
  },
  {
    id: "p2",
    title: "photo2",
    url: photo2,
  },
  {
    id: "p3",
    title: "photo3",
    url: photo3,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <>
      <div className="slider-container">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={index === currentIndex ? "fade" : "slide fade"}
          >
            <img src={photo.url} alt={photo.title} className="photo" />
          </div>
        ))}
        <button onClick={prev} className="prev">
          &lt;
        </button>
        <button onClick={next} className="next">
          &gt;
        </button>
      </div>
      <div className="dots">
        {photos.map((photo, index) => (
          <span
            key={photo.id}
            className={`dot ${index === currentIndex && "active"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
