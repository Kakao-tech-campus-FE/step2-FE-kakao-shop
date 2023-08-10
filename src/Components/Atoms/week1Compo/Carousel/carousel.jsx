import React, { useState, useEffect, useRef } from "react";

const MoveL = () => {
  document.querySelector(".carousel-container").style.transform = "translateX(-500px)";
};

const MoveR = () => {
  document.querySelector(".carousel-container").style.transform = "translateX(+500px)";
};

const Carousel = () => {
  const [isClickL, setClickL] = useState(false);
  const [isClickR, setClickR] = useState(false);

  const clickStateL = () => {
    setClickL(!isClickL);
  };

  const clickStateR = () => {
    setClickR(!isClickR);
  };

  return (
    <>
      <div>
        <div className="carousel-container">
          <div className="each">
            <img src="https://cdn.pixabay.com/photo/2020/11/19/15/33/purple-lights-5758893_1280.jpg"></img>
          </div>
          <div className="each">
            <img src="https://cdn.pixabay.com/photo/2020/09/24/17/44/sunset-5599335_1280.jpg"></img>
          </div>
          <div className="each">
            <img src="https://cdn.pixabay.com/photo/2023/05/29/15/58/sea-8026428_1280.jpg"></img>
          </div>
        </div>
      </div>

      <button type="button" id="carousel-btn-left" onClick={clickStateL}>
        prev
      </button>
      <button type="button" id="carousel-btn-right" onClick={clickStateR}>
        next
      </button>
      {isClickL && <MoveL />}
      {isClickR && <MoveR />}

      {/* <button type="button" id="carousel-btn-left">prev</button>
      <button type="button" id="carousel-btn-right">next</button> */}
    </>
  );
};

export default Carousel;

// onClick={goLeft}
//
