import "@components/Carousel/carousel-item.css";
import { FC } from "react";

export interface CarouselItemProps {
  src: string;
  alt: string;
  position: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ src, alt, position }) => {
  return (
    <div className={"carousel-item " + position}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default CarouselItem;
