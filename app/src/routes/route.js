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
	const staticServerUrl = process.env.REACT_APP_PATH || "";
	
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          
          <Route path={staticServerUrl + "/login"} element={<SignInPage />} />
          <Route path={staticServerUrl + "/signup"} element={<SignUpPage />} />
          
          <Route element={<MainLayout />}>
            <Route path={staticServerUrl + "/"} element={<HomePage />} />
            <Route path={staticServerUrl + "/product/:id"} element={<ProductDetailPage />} />
          </Route>
			
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUrl + "/cart"} element={<CartsPage />} />
            <Route path={staticServerUrl + "/order"} element={<OrderPage />} />
            <Route path={staticServerUrl + "/orders/:id"} element={<OrderDetailPage />} />
          </Route>
          
          <Route path={staticServerUrl + "/error/:id/:message"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
