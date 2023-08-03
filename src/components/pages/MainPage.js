import GNB from "../organisms/GNB";
import { Carousel } from "../Examples/Carousel/Carousel";
import MainSection from "../templates/MainSection";

const MainPage = () => {
  return (
    <>
      <GNB />
      <div className="content">
        <div className="MainPanel">
          <Carousel />
          <div className="LayoutSplit">
            <MainSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
