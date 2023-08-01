import React from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Carousel from "./components/atoms/Carousel";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>

        {/* UI Components */}
        <Route path="/carousel" element={<Carousel />}></Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;