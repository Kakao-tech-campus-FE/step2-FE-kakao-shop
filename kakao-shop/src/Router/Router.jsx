import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/Error/NotFoundPage";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import OrderCompletePage from "../pages/OrderCompletePage";

import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import RequiredAuthLayout from "../layouts/RequiredAuthLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />} />
      <Routes>
        {/* 단독 레이아웃 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* 공통 레이아웃 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Route>

        {/* 로그인 필요 레이아웃 */}
        <Route element={<RequiredAuthLayout />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders/:id" element={<OrderCompletePage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Suspense />
    </BrowserRouter>
  );
};

export default Router;
