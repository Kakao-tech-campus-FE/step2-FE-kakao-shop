import React, { useCallback, useEffect, useState } from "react";
import carouselImage1 from "../../assets/carouselItem1.jpeg";
import carouselImage2 from "../../assets/carouselItem2.jpeg";
import carouselImage3 from "../../assets/carouselItem3.jpeg";
import Slide from "./Slide";
import ControlButton from "./ControlButton";

const images = [
  {
    image: carouselImage1,
    text: "육개장/진짜장 외 오뚜기 인기라면 특가",
  },
  { image: carouselImage2, text: "LG전자 ~52% 특가 연말 결산 세일" },
  {
    image: carouselImage3,
    text: "대용량 퀵 파워워시 밀레 식기세척기 외",
  },
];

const modifiedImages = getModifiedImages(images);

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState("duration-500");

  const handleNextClick = useCallback(() => {
    const nextSlide = activeSlide + 1;
    setActiveSlide(nextSlide);

    if (nextSlide === modifiedImages.length - 1) {
      moveToNthSlide(1);
    }

    setCarouselTransition("duration-500");
  }, [activeSlide]);

  const handlePrevClick = () => {
    const nextSlide = activeSlide - 1;
    setActiveSlide(nextSlide);

    if (nextSlide === 0) {
      moveToNthSlide(modifiedImages.length - 2);
    }

    setCarouselTransition("duration-500");
  };

  const moveToNthSlide = (n) => {
    setTimeout(() => {
      setCarouselTransition("");
      setActiveSlide(n);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeSlide, handleNextClick]);

  return (
    <>
      <h2 className="text-xl pl-4 py-3 font-semibold bg-slate-700 text-gray-200">
        Test Carousel
      </h2>
      <section className="mb-3 relative overflow-hidden">
        <ol
          className={`flex ${carouselTransition}`}
          style={{ translate: `${activeSlide * -100}%` }}
        >
          {modifiedImages.map((image, index) => (
            <Slide key={index} src={image.image} alt={image.text} />
          ))}
        </ol>
        <div className="text-4xl">
          <ControlButton direction="prev" onClick={handlePrevClick} />
          <ControlButton direction="next" onClick={handleNextClick} />
        </div>
      </section>
    </>
  );
}

function getModifiedImages(arr) {
  const start = arr[0];
  const end = arr[arr.length - 1];
  const modifiedArray = [end, ...arr, start];

  return modifiedArray;
}
