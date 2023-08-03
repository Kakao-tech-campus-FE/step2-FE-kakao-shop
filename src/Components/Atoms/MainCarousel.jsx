import { useEffect, useState } from "react";
import "../../Styles/MainCarousel.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useRef } from "react";

const MainCarousel = () => {
  const staticServerUri = process.env.REACT_APP_PATH || "";
  const [current, setCurrent] = useState(0);
  const itemsRef = useRef(null);

  const goNext = () => {
    if (current >= 2) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const goPrev = () => {
    if (current === 0) {
      setCurrent(2);
    } else {
      setCurrent(current - 1);
    }
  };

  useEffect(() => {
    itemsRef.current.style.transform = `translateX(-${current}00vw)`;
  }, [current]);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-items" ref={itemsRef}>
          <img src={staticServerUri + "/carouselItem1.jpeg"}></img>
          <img src={staticServerUri + "/carouselItem2.jpeg"}></img>
          <img src={staticServerUri + "/carouselItem3.jpeg"}></img>
        </div>
        <div className="btns">
          <button className="carousel-btn" onClick={goPrev}>
            <BsChevronLeft className="text-white text-xl" />
          </button>
          <button className="carousel-btn" onClick={goNext}>
            <BsChevronRight className="text-white text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainCarousel;
