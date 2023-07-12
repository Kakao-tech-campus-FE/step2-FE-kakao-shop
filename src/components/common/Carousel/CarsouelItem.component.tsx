import { FC } from "react";

export interface CarouselItemProps {
  src: string;
  alt: string;
  position: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ src, alt, position }) => {
  const classNameByPosition = () => {
    switch (position) {
      case "next":
        return "translate-x-full";
      case "prev":
        return "-translate-x-full";
      default:
        return "";
    }
  };

  return (
    <div
      className={"absolute duration-1000 ease-in-out " + classNameByPosition()}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default CarouselItem;
