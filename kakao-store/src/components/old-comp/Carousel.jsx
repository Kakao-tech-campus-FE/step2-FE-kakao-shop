import { useRef } from "react";
import "../styles/carousel.css"

let index = 0;

const Carousel = () => {
  const carouselRef = useRef(null);

  const handleClickPrev = () => {
    if (index === 0) return;
    index -= 1;
    
    carouselRef.current.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
  }

  const handleClickNext = () => {
    if (index === 6) return;
    index += 1;
    
    carouselRef.current.style.transform = `translate3d(-${700 * index}px, 0, 0)`;
  }

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          <img src="/img/car1.jpg" alt="1"/>
          <img src="/img/car2.gif" alt="2"/>
          <img src="/img/car3.jpg" alt="3"/>
          <img src="/img/car4.png" alt="4"/>
          <img src="/img/car5.gif" alt="5"/>
          <img src="/img/car6.png" alt="6"/>
          <img src="/img/car7.png" alt="7"/>
        </div>
      </div>

      <div>
        <button className="prev" type="button" onClick={handleClickPrev}>prev</button>
        <button className="next" type="button" onClick={handleClickNext}>next</button>
      </div>
    </>
  );
}

export default Carousel;