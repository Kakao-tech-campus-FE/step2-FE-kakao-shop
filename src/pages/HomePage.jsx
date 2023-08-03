import "../styles/pages/Homepage.css";
import "../components/templates/MainProductTemplate";
import MainProductTemplate from "../components/templates/MainProductTemplate";
import { Carousel } from "../components/atoms/Carousel";
import slide from "../data/carouselData.json";
const HomePage = () => {
  return (
    <div>
      <Carousel data={slide.slides} />
      <MainProductTemplate />
    </div>
  );
};

export default HomePage;
