import React, { useState } from "react";
import Toggle from "./components/Toggle";
import Toast from "./components/Toast";
import Radio from "./components/Radio";
import CheckList from "./components/CheckList";
import BreadCrumb from "./components/BreadCrumb";
import Carousel from './components/Carousel';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  const handleShowToast = () => {
  };
  const paths = ['홈', '페이지', '서브페이지'];
  const images = [
    'carouselItem1.jpeg',
    'carouselItem2.jpeg',
    'carouselItem3.jpeg',
  ];
  
  return (
    <>
    <div className="App">
      <Toggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
    </div>
    <br />

      <Toast />
    <br />

      <Radio />
    <br />

      <Checklist />
    <br />

    <div className="App">
      <BreadCrumb paths={paths} />
    </div>
    <br />

    <div className="App">
      <Carousel images={images} />
    </div>

    </>
  )
}



export default App
