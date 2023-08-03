import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ProductDetailPage from "../pages/ProductDetailPage";
import Loader from "../components/atoms/Loader";
import ErrorPage from "../pages/ErrorPage";
import CartsPage from "../pages/CartsPage";
import OrderPage from "../pages/OrderPage";
import RequiredAuthLayout from "../layouts/RequiredAuthLayout";
import OrderDetailPage from "../pages/OrderDetailPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* 공통 레이아웃 */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" element={<CartsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/orders/:id" element={<OrderDetailPage />} />
          </Route>
          {/* 에러페이지: 정해진 경로가 아닌 경우에 해당 페이지로 이동 */}
          <Route path="/error/:id/:message" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
