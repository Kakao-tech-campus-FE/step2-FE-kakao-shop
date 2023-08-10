import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from "./Photo";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {items &&
        items.map((item) => (
          <div key={item.id}>
            <Photo src={item.src} alt={item.alt} className="rounded-none" />
          </div>
        ))}
    </Slider>
  );
};

export default Carousel;
