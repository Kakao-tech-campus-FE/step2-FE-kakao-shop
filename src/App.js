import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/molecules/NavBar";
import LoginPage from "./pages/LoginPage";

function App() {
  const [page, setPage] = React.useState("");

  return (
    <BrowserRouter>
      <NavBar />
      <Breadcrumb currentPage={page} />
      <Routes>
        <Route
          path="/"
          element={<h1>네비게이션 바의 버튼을 눌러서 확인하세요.</h1>}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
