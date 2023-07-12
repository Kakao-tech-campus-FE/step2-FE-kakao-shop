import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import ProductsPage from "./pages/ProductsPage";
import PageContainer from "./components/atoms/PageContainer";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
