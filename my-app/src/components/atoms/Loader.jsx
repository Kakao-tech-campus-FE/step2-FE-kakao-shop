import { useEffect } from "react";
import "../../styles/atoms/Loader.css";

const Loader = () => {
  return (
    <div id="container">
      <div id="loader">{console.log("loader 작동")}</div>
    </div>
  );
};

export default Loader;
