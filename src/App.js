import "./App.css";
import Toast from "./components/Toast";
import Carousel from "./components/Carousel";
import Check from "./components/Check";
import Toggle from "./components/Toggle";
import React from "react";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Toast></Toast>
      <Carousel></Carousel>
      <Check></Check>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
