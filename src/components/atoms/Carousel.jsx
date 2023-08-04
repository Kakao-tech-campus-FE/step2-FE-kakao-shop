import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import "../../styles/atoms/Carousel.css";

const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="viewport">
      <div
        className="pics"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="button-pos">
        <button className="bt" onClick={prev}>
          ◁
        </button>
        <button className="bt" onClick={next}>
          ▷
        </button>
      </div>
    </div>
  );
};
export default Carousel;