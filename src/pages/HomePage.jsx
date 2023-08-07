import Gnb from "../components/organisms/Gnb";
import MainProductTemplate from "../components/templates/MainProductTemplate";
import Carousel from "../components/atoms/Carousel";

const HomePage = () => {
  return (
    <>
      <Gnb />
      <Carousel />
      <MainProductTemplate />
    </>
  );
};

export default HomePage;
