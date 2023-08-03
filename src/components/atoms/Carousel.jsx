/*eslint-disable react/prop-types */
import { useState } from "react"; //eslint-disable-line no-unused-vars
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../../styles/atoms/Carousel.css";

// Carousel
// |_slide

// |_nextSlide
// |_prevSlide

// return
// |_div (carousel)
//  |_div(bnr_home)
//    |_div(btn_prev)
//    |_div(slide_bnr)
//    |  |_img(slide)
//    |  |_img(slide-hidden)
//    |_div(btn_next)
//    |_div(paging_dot)
//       |_button(indicator)
//       |_button(indicator-inactive)

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <div className="bnr_home">
        <div className="btn_flick btn_prev" onClick={prevSlide}>
          <BsArrowLeftCircleFill className="btn_img" />
        </div>
        <div className="slide_bnr">
          {data.map((item, idx) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slide === idx ? "slide" : "slide slide-hidden"}
              />
            );
          })}
        </div>
        <div className="btn_flick btn_next" onClick={nextSlide}>
          <BsArrowRightCircleFill className="btn_img" />
        </div>

        <div className="paging_dot">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
