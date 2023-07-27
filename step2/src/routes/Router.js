import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../components/pages/MainPage";
import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";
import ProductDetailPage from "../components/pages/ProductDetailPage";
import CartPage from "../components/pages/CartPage";
import OrderPage from "../components/pages/OrderPage";
import OrderResultPage from "../components/pages/OrderResultPage";

const Router = () => (
  <>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product/:productId" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/order-result/:orderId" element={<OrderResultPage />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  </>
);

export default Router;
