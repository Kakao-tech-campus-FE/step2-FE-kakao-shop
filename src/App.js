import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import CartPage from "pages/CartPage";
import DetailPage from "pages/DetailPage";
import OrderResultPage from "pages/OrderResultPage";

import PageContainer from "components/atoms/PageContainer";
import Loader from "components/molecules/Loader";
import Toast from "components/molecules/Toast";
import GNB from "components/organisms/GNB";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/organisms/ErrorFallback";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="*" element={<MainPage />} />
              <Route path="/signup" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/products/:id" element={<DetailPage />} />
              <Route path="/carts" element={<CartPage />} />
              <Route path="/orders" element={<OrderResultPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Toast />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
