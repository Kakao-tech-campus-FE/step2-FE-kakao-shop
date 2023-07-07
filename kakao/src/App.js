import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

// import ToggleBtn from "./components/ToggleBtn";
// import RadioBtn from "./components/RadioBtn";
// import CheckList from "./components/CheckList";
// import Carousel from "./components/Carousel";
// import Toast from "./components/Toast";
// import Breadcrumb from "./components/Breadcrumb";

// const HomePage = () => <h1>Home Page</h1>;
// const CategoryPage = () => <h1>Category Page</h1>;
// const InfoPage = () => <h1>Info Page</h1>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <RadioBtn />
      <CheckList />
      <Breadcrumb />
      <Carousel />
      <Toast />
      <ToggleBtn /> */}
    </div>
  );
}

export default App;
