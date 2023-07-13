import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/molecules/NavBar";
import LoginPage from "./pages/LoginPage";
import ToggleButton from "./components/ToggleButton";
import Toast from "./components/Toast";
import RadioButton from "./components/RadioButton";
import Checklist from "./components/Checklist";
import Carousel from "./components/Carousel";
import Title from "./components/atoms/Title";

function App() {
  const [page, setPage] = React.useState("");

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Title>메인 페이지</Title>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/radiobutton" element={<RadioButton />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/togglebutton" element={<ToggleButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
