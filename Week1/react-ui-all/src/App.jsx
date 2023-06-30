import "./App.css";
import { Breadcrumb } from "./components/Breadcrumb";
import { Carousel } from "./components/Carousel";
import { slides } from "./data/carouselData.json";
import { Radiobutton } from "./components/radio";
import { Checklist } from "./components/checklist";
import { Toast } from "./components/Toast";
import { Togglebutton } from "./components/toggle";

function App() {
  const breadpath = ["Home", "Shopping", "Computer", "SSD"];

  return (
    <div>
      <div className="Carousels">
        <Carousel data={slides} />
      </div>
      <div className="Breadcrumbs">
        <Breadcrumb paths={breadpath} />
      </div>
      <div className="products">
        <h2 className="name">인기 ssd 제품 모음전!</h2>
        <h3 className="option">상품선택</h3>
        <h3 className="accessory">추가 상품</h3>
      </div>
      <div className="Radio">
        <Radiobutton />
      </div>
      <div className="Checklist">
        <Checklist />
      </div>
      <div className="Toast">
        <Toast />
      </div>
      <div className="toggle">
        <Togglebutton />
      </div>
    </div>
  );
}

export default App;
