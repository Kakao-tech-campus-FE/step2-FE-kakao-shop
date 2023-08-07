import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";

export const SwiperComponent = () => {
  const slideStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80px",
    color: "black",
  };

  return (
    <Swiper
      grabCursor={false}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      pagination={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="h-[80px] text-black align-items-center"
      direction="vertical"
      spaceBetween={10}
      speed={3000}
    >
      <SwiperSlide style={slideStyle}>요일별 테마딜</SwiperSlide>
      <SwiperSlide style={slideStyle}>여행/쿠폰 Day</SwiperSlide>
    </Swiper>
  );
};
