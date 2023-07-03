import { Outlet } from "react-router-dom";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import Carousel from "./components/Carousel/Carousel";
import RadioGroup from "./components/Radio/RadioGroup";
import Toggle from "./components/Toggle/Toggle";
import CheckboxGroup from "./components/Checkbox/CheckboxGroup";

function App() {
  return (
    <div className="w-full h-full m-5">
      <Breadcrumb />
      <Outlet />
      <Carousel />
      <div className="flex gap-4">
        <RadioGroup />
        <CheckboxGroup />
      </div>
      <Toggle />
    </div>
  );
}

export default App;
