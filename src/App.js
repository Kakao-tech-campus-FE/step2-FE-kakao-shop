import logo from "./logo.svg";
import "./styles/App.css";
import React from 'react';
import Toast from "./components/Toast";
import Carousel from "./components/Carousel";
import RadioButton from "./components/RadioButton";
import ToggleButton from "./components/ToggleButton";
import Checklist from "./components/Checklist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";

function App() {
  const [page, setPage] = React.useState("");

  const clickHandler = (event) => {
    setPage(event.target.innerHTML)
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Link className="navbarMenu" to={"/"} onClick={clickHandler}>
            Main
          </Link>
          <Link className="navbarMenu" to={"/toast"} onClick={clickHandler}>
            Toast
          </Link>
          <Link className="navbarMenu" to={"/carousel"} onClick={clickHandler}>
            Carousel
          </Link>
          <Link className="navbarMenu" to={"/radiobutton"} onClick={clickHandler}>
            RadioButton
          </Link>
          <Link className="navbarMenu" to={"/togglebutton"} onClick={clickHandler}>
            ToggleButton
          </Link>
          <Link className="navbarMenu" to={"/checklist"} onClick={clickHandler}>
            Checklist
          </Link>
        </div>
        <Breadcrumb currentPage={page} />
        <Routes>
          <Route
            path="/"
            element={<h1>네비게이션 바의 버튼을 눌러서 확인하세요.</h1>}
          />
          <Route path="/toast" element={<Toast />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/radiobutton" element={<RadioButton />} />
          <Route path="/togglebutton" element={<ToggleButton />} />
          <Route path="/checklist" element={<Checklist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
