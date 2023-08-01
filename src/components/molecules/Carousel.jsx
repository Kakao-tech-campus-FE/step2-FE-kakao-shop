import { useEffect, useMemo, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SLIDE_STATE = {
  PREV_INDEX: -1,
  CURRENT_INDEX: 0,
  NEXT_INDEX: 1,
  HIDDEN_INDEX: 2
};

const getSlideState = (index, current) => {
  if (index === current - 1) {
    return SLIDE_STATE.PREV_INDEX;
  } else if (index === current) {
    return SLIDE_STATE.CURRENT_INDEX;
  } else if (index === current + 1) {
    return SLIDE_STATE.NEXT_INDEX;
  } else {
    return SLIDE_STATE.HIDDEN_INDEX;
  }
};

const getTranslateX = (slideState) => {
  switch (slideState) {
    case SLIDE_STATE.PREV_INDEX:
      return "translate-x-[-100%]";
    case SLIDE_STATE.CURRENT_INDEX:
      return "translate-x-0";
    case SLIDE_STATE.NEXT_INDEX:
      return "translate-x-[100%]";
    default:
      return "hidden";
  }
};
/**
 *
 * @param image image url of slide
 * @param index index of slide
 * @param state state of carousel, which slide is current
 * @returns {JSX.Element}
 * @constructor
 */
const CarouselSlide = ({ image, index, state }) => {

  const [slideState, setSlideState] = useState(SLIDE_STATE.HIDDEN_INDEX);
  useEffect(() => {
    setSlideState(getSlideState(index, state));
  }, [state, index]);
  return (
    <div className={`carousel-slide-prev h-full w-full absolute transform ${getTranslateX(slideState)} ease-in-out duration-[400ms]`}>
      <img src={image} alt="carousel" className="carousel-image object-cover" />
    </div>
  );
};


const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);



  const mountImages = useMemo(() => {
    if (images.length === 1) {
      return [...images, ...images, ...images];
    } else if (images.length === 2) {
      return [...images, ...images];
    } else {
      return [images[images.length - 1], ...images, images[0]];
    }
  }, [images]);

  const length = useMemo(() => mountImages.length, [mountImages.length]);

  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(0);
      setTimeout(() => {
        setCurrentSlide(length - 2);
      }, 400);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === length - 2) {
      setCurrentSlide(length - 1);
      setTimeout(() => {
        setCurrentSlide(1);
      }, 400);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className={"carousel w-full"}>
      <div className={"carousel-slide-slot relative w-full overflow-hidden"}>
        {mountImages.map((image, index) => (
          <CarouselSlide
            key={index}
            image={image}
            index={index}
            state={currentSlide}
          />
        ))}
        <div className="carousel-dummy h-full w-full opacity-0">
          <img src={images[0]} alt="carousel-dummy" className="carousel-image object-cover" />
        </div>
        <button
          className={"carousel-button-right h-10 w-10 bg-black rounded-full text-white opacity-50 left-0 absolute flex justify-center items-center top-[50%] bottom-[50%] translate-y-[-50%] cursor-pointer z-10"}
          onClick={prevSlide}>
          <AiOutlineLeft />
        </button>

        <button
          className={"carousel-button-left h-10 w-10 bg-black rounded-full text-white opacity-50 right-0 absolute flex justify-center items-center top-[50%] bottom-[50%] translate-y-[-50%] cursor-pointer z-10"}
          onClick={nextSlide}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;