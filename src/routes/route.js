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

const staticServerUri = process.env.REACT_APP_PATH || "";

const AppRoutes = () => {
	
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          
          <Route path={staticServerUri + "/login"} element={<SignInPage />} />
          <Route path={staticServerUri + "/signup"} element={<SignUpPage />} />
          
          <Route element={<MainLayout />}>
            <Route path={staticServerUri + "/"} element={<HomePage />} />
            <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage />} />
          </Route>
			
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUri + "/cart"} element={<CartsPage />} />
            <Route path={staticServerUri + "/order"} element={<OrderPage />} />
            <Route path={staticServerUri + "/orders/:id"} element={<OrderDetailPage />} />
          </Route>
          
          <Route path={staticServerUri + "/error/:id/:message"} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
