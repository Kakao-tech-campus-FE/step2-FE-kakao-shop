import GNB from "../organisms/GNB";
import Examples from "../Examples/Examples";
import { Carousel } from "../Examples/Carousel/Carousel";
import MainSection from "../templates/MainSection";

const MainPage = () => {
  return <>
    <GNB />
    {/* <Examples /> */}
    <div className="MainPanel">
      <Carousel />
      <div className="LayoutSplit">
        <MainSection />
      </div>
    </div>
    {/* <MainPage>
      <GNB />
      <MainPanel>
        <Carousel />
        <layout_split>
          <main_section />
          <side-section />
        </layout_split>
      </MainPanel>
    </MainPage> */}
  </>
};

export default MainPage;