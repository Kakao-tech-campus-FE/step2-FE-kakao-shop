import CarouselItem, {
  CarouselItemProps,
} from "@components/common/Carousel/CarsouelItem.component";
import { FC, useState } from "react";

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
    <div className="relavite w-full">
      <div className="relative w-[88rem] h-[18rem] overflow-hidden mx-auto">
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            alt={item.alt}
            src={item.src}
            position={getPosition(index)}
          />
        ))}
        <div>
          {Array.from({ length: carouselItems.length }).map((_, index) => (
            <div
              key={index}
              className={"" + (index === itemIndex ? " active" : "")}
            ></div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-12 p-4 rounded-full bg-slate-100 opacity-80 transform -translate-y-1/2 rotate-180 z-10"
          onClick={() =>
            setItemIndex((index) => (index - 1 > 0 ? index - 1 : 0))
          }
        >
          <img src="/icons/next.svg" alt="prev" />
        </button>
        <button
          className="absolute top-1/2 right-12 p-4 rounded-full bg-slate-100 opacity-80 transform -translate-y-1/2 z-10"
          onClick={() =>
            setItemIndex((index) =>
              index + 1 < carouselItems.length ? index + 1 : index
            )
          }
        >
          <img src="/icons/next.svg" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
