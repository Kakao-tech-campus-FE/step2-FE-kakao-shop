import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsListPage from "pages/ProductsListPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import CartPage from "pages/CartPage";
import DetailPage from "pages/DetailPage";
import OrderPage from "pages/OrderPage";
import MyOrderPage from "pages/MyOrderPage";

import MainContainer from "components/atoms/MainContainer";
import PageContainer from "components/atoms/PageContainer";
import Loader from "components/molecules/Loader";
import Toast from "components/molecules/Toast";
import GNB from "components/organisms/GNB";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/organisms/ErrorFallback";

const path = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <MainContainer>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={path + "/"} element={<ProductsListPage />} />
                <Route path={path + "/signup"} element={<RegisterPage />} />
                <Route path={path + "/login"} element={<LoginPage />} />
                <Route path={path + "/products/:id"} element={<DetailPage />} />
                <Route path={path + "/cart"} element={<CartPage />} />
                <Route path={path + "/order"} element={<OrderPage />} />
                <Route
                  path={path + "/order/:orderId"}
                  element={<MyOrderPage />}
                />
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
