import "./App.css";
import Toast from "./components/Toast";
import Carousel from "./components/Carousel";
import Check from "./components/Check";
import Toggle from "./components/Toggle";
import Radio from "./components/Radio";
import React, { useState } from "react";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Toast
        button="토스트"
        buttonstyle={{ backgroundColor: "yellow" }}
        message={"토스트"}
      ></Toast>
      <Carousel></Carousel>
      <Check></Check>
      <Toggle></Toggle>
      <Radio></Radio>
    </div>
  );
}

export default App;
