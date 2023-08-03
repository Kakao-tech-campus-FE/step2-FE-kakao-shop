import { useEffect, useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const MainCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/carouselItem1.jpeg",
    "/carouselItem2.jpeg",
    "/carouselItem3.jpeg",
  ];

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 3000); // 3초마다 다음 아이템으로 넘어가도록 설정 (1000ms = 1초)

    return () => {
      clearInterval(interval); // 컴포넌트가 언마운트될 때 타이머 해제
    };
  }, [activeIndex]);

  return (
    <div className="relative">
      <div className="relative w-full h-[300px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button
        className="absolute z-10 top-1/2 left-40 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full text-2xl opacity-40 hover:opacity-80"
        onClick={handlePrevSlide}
      >
        <BsCaretLeftFill />
      </button>

      <button
        className="absolute z-10 top-1/2 right-40 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full text-2xl opacity-40 hover:opacity-80"
        onClick={handleNextSlide}
      >
        <BsCaretRightFill />
      </button>
    </div>
  );
};

export default MainCarousel;
