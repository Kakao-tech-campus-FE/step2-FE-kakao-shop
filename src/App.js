import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Toast from "./components/Toast";
import Carousel from "./components/Carousel";
import RadioButton from "./components/RadioButton";
import ToggleButton from "./components/ToggleButton";
import CheckList from "./components/molecules/CheckList";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout"
import OrderPage from "./pages/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import Sidebar from "./components/molecules/Sidebar";

function App() {
  const [page, setPage] = React.useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>

        {/* UI Components */}
        <Route path="/carousel" element={<Carousel />}></Route>
        <Route path="/radiobutton" element={<RadioButton />}></Route>
        <Route path="/toast" element={<Toast />}></Route>
        <Route path="/togglebutton" element={<ToggleButton />}></Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
        </Route>

        <Route element={<RequiredAuthLayout />}>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/orders/complete/:id" element={<OrderSuccessPage />}></Route>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
