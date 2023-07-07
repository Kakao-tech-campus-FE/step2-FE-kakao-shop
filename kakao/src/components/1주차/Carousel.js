import React, { useRef, useState, useEffect } from "react";

const Carousel = () => {
  const total_slides = 3; // n-1 array
  const [current, setCurrent] = useState(0);
  const [slideColors, setSlideColors] = useState([
    "#f08d9e",
    "#eae880",
    "#a6ed96",
    "#8acde8",
  ]);

  const ref = useRef(null);

  //next 누르면 다음으로, 슬라이드 끝나면 끝
  const next = () => {
    if (current >= total_slides) return;
    else {
      setCurrent(current + 1);
      console.log();
    }
  };

  const prev = () => {
    if (current === 0) return;
    else setCurrent(current - 1);
  };

  // id값 기반으로 원하는 슬라이드 설정
  const wanted = (e) => {
    setCurrent(Number(e.target.id));
  };

  useEffect(() => {
    const slides = ref.current.getElementsByClassName("slide");
    const slideWidth = slides[0].offsetWidth;
    ref.current.style.transition = "transform 0.3s ease-in-out";
    ref.current.style.transform = `translateX(-${current * slideWidth}px)`;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.backgroundColor = slideColors[i];
    }
  }, [current, slideColors]);

  return (
    <div className="Carousel">
      <h3>Carousel</h3>
      <div className="wrapper">
        <div className="frame">
          <div className="slides" ref={ref}>
            <div className="slide">1</div>
            <div className="slide">2</div>
            <div className="slide">3</div>
            <div className="slide">4</div>
          </div>
        </div>
        <div className="button-container">
          <div className="button" onClick={prev}>
            👈🏻
          </div>
          <div className="button" onClick={next}>
            👉🏻
          </div>
        </div>
        <div className="button-2-container">
          {[0, 1, 2, 3].map((num) => (
            <div
              className={`button-2 ${num === current && "active"}`}
              onClick={wanted}
              id={num}
              key={num}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
