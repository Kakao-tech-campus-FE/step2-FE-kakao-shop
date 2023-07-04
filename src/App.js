// css
import "./App.css";

// component
import Toast from "./components/Toast.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Carousel from "./components/Carousel.js";
import RadioList from "./components/RadioList.js";
import ToggleButton from "./components/ToggleButton.js";
import CheckList from "./components/CheckList.js";

// image
import carouselImage1 from "./assets/images/carousel/carouselItem1.jpeg";
import carouselImage2 from "./assets/images/carousel/carouselItem2.jpeg";
import carouselImage3 from "./assets/images/carousel/carouselItem3.jpeg";

function App() {
  return (
    <div className="App">
      <h1>JsH 쇼핑하기</h1>
      <h2>TEST Page</h2>
      <h3>[Toast]</h3>
      <Toast />
      <br />
      <h3>[Breadcrumb]</h3>
      <Breadcrumb paths={["쇼핑하기", "TEST", "Breadcrumb"]} />
      <br />
      <h3>[Carousel]</h3>
      <Carousel images={[carouselImage1, carouselImage2, carouselImage3]} />
      <br />
      <h3>[RadioList]</h3>
      <RadioList items={["옵션1", "옵션2", "옵션3"]} />
      <br />
      <h3>[ToggleButton]</h3>
      <ToggleButton />
      <br />
      <h3>[CheckList]</h3>
      <CheckList items={["옵션1", "옵션2", "옵션3"]} />
      <br />
    </div>
  );
}

export default App;
