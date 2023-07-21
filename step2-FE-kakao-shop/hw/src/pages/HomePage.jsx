import MainProductTemplate from "../components/oTemplates/MainProductTemplate";
import Carousel from "../components/atoms/Carousel";
import { useState, useEffect } from "react";

const slides = [
  "/carouselItem1.jpeg",
  "/carouselItem2.jpeg",
  "/carouselItem3.jpeg",
];

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Carousel>
        {slides.map((s) => (
          <li key={s} className="carousel-item">
            <img src={s} width={width} />
          </li>
        ))}
      </Carousel>
      <h1> Home Page</h1>
      <MainProductTemplate />
    </div>
  );
};

export default HomePage;
