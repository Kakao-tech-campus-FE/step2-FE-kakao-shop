import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Toast from "./Toast";
import Radio from "./radio";
import Checkbox from "./Checkbox"
import Carousel from "./Carousel";
import { Toggle } from "./Toggle";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    토스트<Toast />
    <br></br>
    라디오<Radio />
    <br></br>
    체크박스<Checkbox />
    <br></br>
    토글<Toggle />
    <br></br>
    캐러셀<Carousel />
  </StrictMode>,
  rootElement
);
