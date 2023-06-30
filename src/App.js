// css
import "./App.css";

// component
import Toast from "./components/Toast.js";
import Breadcrumb from "./components/Breadcrumb.js";
import Carousel from "./components/Carousel.js";
import RadioButton from "./components/RadioButton.js";
import ToggleButton from "./components/ToggleButton.js";

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
      <Toast></Toast>
      <br />
      <br />
      <h3>[Breadcrumb]</h3>
      <Breadcrumb paths={["쇼핑하기", "TEST", "Breadcrumb"]}></Breadcrumb>
      <br />
      <br />
      <h3>[Carousel]</h3>
      <Carousel
        images={[carouselImage1, carouselImage2, carouselImage3]}
      ></Carousel>
      <br />
      <br />
      <h3>[RadioButton]</h3>
      <RadioButton radios={["옵션1", "옵션2", "옵션3"]}></RadioButton>
      <br />
      <br />
      <h3>[ToggleButton]</h3>
      <ToggleButton></ToggleButton>
    </div>
  );
}

export default App;
