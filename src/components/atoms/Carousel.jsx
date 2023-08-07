import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/carouselItem1.jpeg";
import image2 from "../../assets/carouselItem2.jpeg";
import image3 from "../../assets/carouselItem3.jpeg";

const NewCarousel = () => {
  return (
    <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={image1} alt="Image 1" />
      </div>
      <div>
        <img src={image2} alt="Image 2" />
      </div>
      <div>
        <img src={image3} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default NewCarousel;