import "./App.css";

import Carousel from "./components/Carousel";
import RadioButton from "./components/RadioButton";
import Breadcrumb from "./components/BreadCrumb";

import Toggle from "./components/Toggle";
import CheckList from "./components/CheckList";
import Toast from "./components/Toast";

function App() {
  return (
    <>
      <div className="toast-container">
        <h1>Toast</h1>
        {/* <Toast></Toast> */}
      </div>
      <div className="breadcrumb-container">
        <h1>Breadcrumb</h1>
        {/* <Breadcrumb></Breadcrumb> */}
      </div>
      <div className="carousel">
        <h1>Carousel</h1>
        <Carousel></Carousel>
      </div>
      <div className="radio-button-container">
        <h1>Radio Button</h1>
        <RadioButton></RadioButton>
      </div>
      <div className="toggle-button-container">
        <h1> Toggle Button</h1>
        <Toggle></Toggle>
      </div>
      <div className="checklist-container">
        <h1>CheckList</h1>
        <CheckList></CheckList>
      </div>
    </>
  );
}

export default App;
