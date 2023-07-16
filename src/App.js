import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GNB from "./components/organisms/GNB";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DetailPage from "./pages/DetailPage";
import PageContainer from "./components/atoms/PageContainer";
import Test from "./components/organisms/Test";
import Loader from "./components/molecules/Loader";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/organisms/ErrorFallback";

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
              <Route path="/test" element={<Test />} />
              <Route path="/products/:id" element={<DetailPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
