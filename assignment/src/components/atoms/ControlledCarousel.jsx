import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ControlledCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-10">
      <Slider {...settings} className="p">
        <div>
          <img src="./carouselItem1.jpeg" alt="" />
        </div>
        <div>
          <img src="./carouselItem2.jpeg" alt="" />
        </div>
        <div>
          <img src="./carouselItem3.jpeg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default ControlledCarousel;
