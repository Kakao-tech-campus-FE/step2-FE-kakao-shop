import React from "react";
import "../styles/Carousel.css";
import carousel1 from "../images/carouselItem1.jpeg";
import carousel2 from "../images/carouselItem2.jpeg";
import carousel3 from "../images/carouselItem3.jpeg";

const Carousel2 = () => {
  const list = [carousel1, carousel2, carousel3];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const imgRef1 = React.useRef();
  const imgRef2 = React.useRef();
  const imgRef3 = React.useRef();
  const dotRef1 = React.useRef();
  const dotRef2 = React.useRef();
  const dotRef3 = React.useRef();
  const dotRef = [dotRef1, dotRef2, dotRef3];

  React.useEffect(() => {
    dotRef.map((dotRef) => {
      dotRef.current.style.opacity = "50%";
    });
    dotRef[currentIndex].current.style.opacity = "100%";
  }, [currentIndex]); 

  const handleLeftButton = () => {    
    imgRef1.current.style.translate = "1280px";
    imgRef2.current.style.translate = "1280px";
    imgRef3.current.style.translate = "1280px";
    setTimeout(() => {
      imgRef1.current.style.transition = "0s";
      imgRef2.current.style.transition = "0s";
      imgRef3.current.style.transition = "0s";
      imgRef1.current.style.translate = "0";
      imgRef2.current.style.translate = "0";
      imgRef3.current.style.translate = "0";
      if (currentIndex === 0) setCurrentIndex(list.length - 1);
      else setCurrentIndex(currentIndex - 1);
    }, 500);
    imgRef1.current.style.transition = ".5s";
    imgRef2.current.style.transition = ".5s";
    imgRef3.current.style.transition = ".5s";
  };

  const handleRightButton = () => {
    imgRef1.current.style.translate = "-1280px";
    imgRef2.current.style.translate = "-1280px";
    imgRef3.current.style.translate = "-1280px";
    setTimeout(() => {
      imgRef1.current.style.transition = "0s";
      imgRef2.current.style.transition = "0s";
      imgRef3.current.style.transition = "0s";
      imgRef1.current.style.translate = "0";
      imgRef2.current.style.translate = "0";
      imgRef3.current.style.translate = "0";
      if (currentIndex === list.length - 1) setCurrentIndex(0);
      else setCurrentIndex(currentIndex + 1);
    }, 500);
    imgRef1.current.style.transition = ".5s";
    imgRef2.current.style.transition = ".5s";
    imgRef3.current.style.transition = ".5s";
  };

  return (
    <>
      <div className="carousel">
      <img className="carouselImg"
          ref={imgRef1}
          src={list[currentIndex === 0 ? list.length - 1 : currentIndex - 1]}
          alt={currentIndex}
        />
        <img
          ref={imgRef2}
          src={list[currentIndex]}
          alt={Math.abs(currentIndex)}
        />
        <img
          ref={imgRef3}
          src={list[currentIndex === list.length - 1 ? 0 : currentIndex + 1]}
          alt={currentIndex}
        />
        <div className="dots">
          <div ref={dotRef1} className="dot dot1"></div>
          <div ref={dotRef2} className="dot dot2"></div>
          <div ref={dotRef3} className="dot dot3"></div>
        </div>

        <button className="text-5xl text-white absolute w-16 h-16 bg-gray-400 border-4 border-solid border-white opacity-30 rounded-full hover:bg-gray-200 left-5 top-1/2 -translate-y-1/2" onClick={handleLeftButton}>&lt;</button>
        <button className="text-5xl text-white absolute w-16 h-16 bg-gray-400 border-4 border-solid border-white opacity-30 rounded-full hover:bg-gray-200 right-5 top-1/2 -translate-y-1/2" onClick={handleRightButton}>&gt;</button>
      </div>

      <br />
    </>
  );
};

export default Carousel2;