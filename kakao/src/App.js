import React from "react";
import ToggleBtn from "./components/ToggleBtn";
import RadioBtn from "./components/RadioBtn";
import CheckList from "./components/CheckList";
import Carousel from "./components/Carousel";
import Toast from "./components/Toast";
import Breadcrumb from "./components/Breadcrumb";
import "./App.css";

const HomePage = () => <h1>Home Page</h1>;
const CategoryPage = () => <h1>Category Page</h1>;
const InfoPage = () => <h1>Info Page</h1>;

function App() {
  return (
    <div className="App">
      {/* <ToggleBtn />
      <RadioBtn />
      <Toast /> */}
      <CheckList />
      <Carousel />
      <Breadcrumb />
    </div>
  );
}

export default App;
