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

const url = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <BrowserRouter>
      <PageContainer>
        <GNB></GNB>
        <MainContainer>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={url + "/"} element={<ProductsListPage />} />
                <Route path={url + "/signup"} element={<RegisterPage />} />
                <Route path={url + "/login"} element={<LoginPage />} />
                <Route path={url + "/product/:id"} element={<DetailPage />} />
                <Route path={url + "/cart"} element={<CartPage />} />
                <Route path={url + "/order"} element={<OrderPage />} />
                <Route
                  path={url + "/order/:orderId"}
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
