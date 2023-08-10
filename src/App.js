import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ErrorPage from "./pages/ErrorPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";

const staticServerUrl = process.env.REACT_APP_PATH || "";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route
            path={staticServerUrl + "/login"}
            element={<LoginPage />}
          ></Route>
          <Route
            path={staticServerUrl + "/signup"}
            element={<RegisterPage />}
          ></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path={staticServerUrl + "/"} element={<HomePage />}></Route>
            <Route
              path={staticServerUrl + "/product/:id"}
              element={<ProductDetailPage />}
            ></Route>
          </Route>
          {/* 로그인된 사용자만 접근 가능 영역 */}
          <Route element={<RequiredAuthLayout />}>
            <Route
              path={staticServerUrl + "/cart"}
              element={<CartPage />}
            ></Route>
            <Route
              path={staticServerUrl + "/order"}
              element={<OrderPage />}
            ></Route>
            <Route
              path={staticServerUrl + "/orders/complete/:id"}
              element={<OrderCompletePage />}
            ></Route>
          </Route>
          <Route
            path={staticServerUrl + "/error"}
            element={<ErrorPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
