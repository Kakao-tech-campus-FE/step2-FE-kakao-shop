import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const onPrevClickHandler = () => {
    if (imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const onNextClickHandler = () => {
    if (imgIndex < 2) {
      setImgIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative mb-5 h-[130px] overflow-hidden md:h-[200px] lg:mb-5 lg:h-[300px]">
      <div className="absolute left-1/2 top-1/2 z-10 flex w-[100vw] -translate-x-1/2 -translate-y-1/2 justify-between px-10 xl:w-[1280px]">
        <button
          className="h-[50px] w-[50px] rounded-[40px] border-white bg-gray-100/50 pl-[14px] text-xl text-white hover:bg-gray-100/80"
          onClick={onPrevClickHandler}
        >
          <BsChevronLeft />
        </button>
        <button
          className="h-[50px] w-[50px] rounded-[40px] bg-gray-100/50 pl-[14px] text-xl text-white hover:bg-gray-100/80"
          onClick={onNextClickHandler}
        >
          <BsChevronRight />
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 w-[700px] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-gray-100 md:w-[1024px] lg:w-[1500px]">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${imgIndex * 100}%)` }}
        >
          <img className="w-full" src="/carouselItem1.jpeg" alt="" />
          <img className="w-full" src="/carouselItem2.jpeg" alt="" />
          <img className="w-full" src="/carouselItem3.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
