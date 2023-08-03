import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "../components/pages/MainPage";
import SignupPage from "../components/pages/SignupPage";
import LoginPage from "../components/pages/LoginPage";
import ProductDetailPage from "../components/pages/ProductDetailPage";
import CartPage from "../components/pages/CartPage";
import OrderPage from "../components/pages/OrderPage";
import OrderResultPage from "../components/pages/OrderResultPage";

const staticServerUri = process.env.REACT_APP_PATH || "";

const Router = () => (
  <>
    <Routes>
      <Route path={ staticServerUri + "/signup" } element={<SignupPage />} />
      <Route path={ staticServerUri + "/login" } element={<LoginPage />} />
      <Route path={ staticServerUri + "/product/:productId" } element={<ProductDetailPage />} />
      <Route path={ staticServerUri + "/cart" } element={<CartPage />} />
      <Route path={ staticServerUri + "/order" } element={<OrderPage />} />
      <Route path={ staticServerUri + "/order-result/:orderId" } element={<OrderResultPage />} />
      <Route path={ staticServerUri + "/*" } element={<MainPage />} />
    </Routes>
  </>
);

export default Router;
