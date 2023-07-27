import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import CartPage from "pages/CartPage";
import DetailPage from "pages/DetailPage";
import OrderPage from "pages/OrderPage";

import PageContainer from "components/atoms/PageContainer";
import Loader from "components/molecules/Loader";
import Toast from "components/molecules/Toast";
import GNB from "components/organisms/GNB";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/organisms/ErrorFallback";
import MainContainer from "components/atoms/MainContainer";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <MainContainer>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="*" element={<MainPage />} />
                <Route path="/signup" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products/:id" element={<DetailPage />} />
                <Route path="/carts" element={<CartPage />} />
                <Route path="/orders" element={<OrderPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </MainContainer>
        <Toast />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
