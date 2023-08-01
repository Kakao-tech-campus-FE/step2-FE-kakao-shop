import React from "react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Photo from "../../../atoms/Photo";
import image1 from "../../../../assets/carouselItem1.jpeg";
import image2 from "../../../../assets/carouselItem2.jpeg";
import image3 from "../../../../assets/carouselItem3.jpeg";
import "./Carousel.css";

const slides = [
  { id: 0, imgSrc: image1, text: "육개장/진짜장 외 오뚜기 인기라면 특가" },
  { id: 1, imgSrc: image2, text: "LG전자 ~52% 특가 연말 결산 세일" },
  { id: 2, imgSrc: image3, text: "대용량 퀵 파워워시 밀레 식기세척기 외" },
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      navigation
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={`slide-key-${slide.id}`}>
          <Photo src={slide.imgSrc} alt={slide.text} asset />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
