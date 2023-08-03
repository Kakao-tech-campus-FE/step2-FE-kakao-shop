import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderPage from "./pages/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchResultPage from "./pages/SearchResultPage";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={staticServerUri + "/login"} element={<LoginPage />}></Route>
        <Route path={staticServerUri + "/signup"} element={<RegisterPage />}></Route>

        <Route element={<MainLayout />}>
          <Route path={staticServerUri + "/"} element={<HomePage />}></Route>
          <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage />}></Route>
          <Route path={staticServerUri + "/search/:query"} element={<SearchResultPage />}></Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path={staticServerUri + "/cart"} element={<CartPage />}></Route>
            <Route path={staticServerUri + "/order"} element={<OrderPage />}></Route>
            <Route path={staticServerUri + "/orders/complete/:id"} element={<OrderSuccessPage />}></Route>
          </Route>
        </Route>
        <Route path={staticServerUri + "*"} element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
