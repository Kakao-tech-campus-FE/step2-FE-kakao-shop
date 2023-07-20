import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DetailPage from "./pages/DetailPage";
import PageContainer from "./components/atoms/PageContainer";
import Loader from "./components/molecules/Loader";
import { useIsFetching } from "react-query";

function AppNoSuspense() {
  const isFetching = useIsFetching();

  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products/:id" element={<DetailPage />} />
        </Routes>
        {isFetching ? <Loader /> : null}
      </PageContainer>
    </BrowserRouter>
  );
}

export default AppNoSuspense;
