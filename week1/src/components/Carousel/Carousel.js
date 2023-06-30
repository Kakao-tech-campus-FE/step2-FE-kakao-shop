import "../../styles/Carousel.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Carousel = ({ background }) => {
  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${background[0]})` }}
    >
      <BsChevronLeft className="arrow" size="25" color="white" />
      <BsChevronRight className="arrow" size="25" color="white" />
    </div>
  );
};

export default Carousel;
