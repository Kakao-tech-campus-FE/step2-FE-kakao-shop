import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/product/:id" element={<ProductDetailPage />}></Route>ㄴ */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 1주차 컴포넌트들 삭제.(주석처리 했더니 너무 많아 코드가 지저분..)
