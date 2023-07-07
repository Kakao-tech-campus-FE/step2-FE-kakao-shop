import "./App.css";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import GNB from "./components/organisms/GNB";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PageContainer from "./components/atoms/PageContainer";
import React, { useEffect, useState } from "react";
import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("email") !== null);

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      setLogin((prev) => true);
    } else {
      setLogin((prev) => false);
    }
  }, [localStorage.getItem("email")]);

  return (
    <BrowserRouter>
      <PageContainer>
        <GNB login={login}></GNB>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/signin" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
