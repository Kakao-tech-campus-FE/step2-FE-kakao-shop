import React, { useState } from "react";
import "./App.css";
import Toast from "./components/toast/toast";
import Button from "./components/toast/button";
import Toggle from "./components/togglebutton/toggle";
import Radio from "./components/radiobutton/radio";
import Check from "./components/checklist/checklist";
import Bread from "./components/breadcrumb/breadcrumb";
import Carousel from "./components/carousel/carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function App() {
  const [list, setList] = useState([]);
  let toastProperties = null;

  const showToast = () => {
    toastProperties = {
      id: list.length + 1,
      title: "Success",
      description: "this is descrition",
      backgroundColor: "#6d6",
    };
    setList([...list, toastProperties]);
  };

  return (
    <div className="App">
      <ul>
        <li>
          <Toggle />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Check />
        </li>
        <li>
          <Bread />
        </li>
        <li>
          <div className="max-w-lg">
            <Carousel>
              {slides.map((s) => (
                <img src={s} width={300} />
              ))}
            </Carousel>
          </div>
        </li>
        <li>
          <div>
            <h1>Toast</h1>
            <div>
              <Button handleClick={() => showToast()}>success</Button>
            </div>
            <Toast toastlist={list} position="buttom-right" setList={setList} />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
