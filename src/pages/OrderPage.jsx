import React from "react";
import Carousel from "../components/Carousel/Carousel";
import carouselItem1 from "../assets/carouselItems/carouselItem1.jpeg";
import carouselItem2 from "../assets/carouselItems/carouselItem2.jpeg";
import carouselItem3 from "../assets/carouselItems/carouselItem3.jpeg";

const carouselItems = [carouselItem1, carouselItem2, carouselItem3];
export default function OrderPage() {
  return (
    <div>
      <Carousel images={carouselItems} />
    </div>
  );
}
