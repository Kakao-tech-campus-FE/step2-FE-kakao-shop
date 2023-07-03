import CarouselItem, {
  CarouselItemProps,
} from "@/components/common/Carousel/CarsouelItem.component";
import { FC, useState } from "react";
import "@/components/common/Carousel/carousel.css";

interface CarouselProps {
  carouselItems: Omit<CarouselItemProps, "position">[];
}

const Carousel: FC<CarouselProps> = ({ carouselItems }) => {
  const [itemIndex, setItemIndex] = useState(0);

  const getPosition = (index: number) => {
    if (index == itemIndex) return "active";
    if (index <= itemIndex) return "prev";
    if (index >= itemIndex) return "next";
    return "";
  };

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => (
        <CarouselItem
          key={index}
          alt={item.alt}
          src={item.src}
          position={getPosition(index)}
        />
      ))}
      <div className="carousel-indicators">
        {Array.from({ length: carouselItems.length }).map((_, index) => (
          <div
            key={index}
            className={
              "carousel-indicator" + (index === itemIndex ? " active" : "")
            }
          ></div>
        ))}
      </div>
      <button
        className="carousel-prev"
        onClick={() => setItemIndex((index) => (index - 1 > 0 ? index - 1 : 0))}
      >
        <img src="/next.svg" alt="prev" />
      </button>
      <button
        className="carousel-next"
        onClick={() =>
          setItemIndex((index) =>
            index + 1 < carouselItems.length ? index + 1 : index
          )
        }
      >
        <img src="/next.svg" alt="next" />
      </button>
    </div>
  );
};

export default Carousel;
