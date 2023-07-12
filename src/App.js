import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GNB from "./components/organisms/GNB";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageContainer from "./components/atoms/PageContainer";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
