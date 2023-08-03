import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import CartPage from "./components/pages/CartPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import OrderPage from "./components/pages/OrderPage";

import MainLayout from "./components/layouts/MainLayout";
import RequiredAuthLayout from "./components/layouts/RequiredAuthLayout";

import { SkeletonTheme } from "react-loading-skeleton";
import { createContext } from "react";

import useToast from "./hooks/useToast";
import Toast from "./components/atoms/Toast";
import OrderCompletePage from "./components/pages/OrderCompletePage";

export const ToastContext = createContext(null);
const basename = process.env.REACT_APP_PATH;
function App() {
  const { toastMessage, toastShow, showToast, hideToast } = useToast();

  return (
    <div className="App relative min-h-screen">
      <ToastContext.Provider
        value={{ toastMessage, toastShow, showToast, hideToast }}
      >
        <SkeletonTheme color="#202020" highlightColor="#aaa">
          <Toast
            message={toastMessage}
            isShow={toastShow}
            time={2400}
            onClose={() => {
              hideToast();
            }}
          />
          <BrowserRouter basename={basename}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path={"/signup"} element={<RegisterPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/product/:id"} element={<ProductDetailPage />} />
                <Route element={<RequiredAuthLayout />}>
                  <Route path={"/carts"} element={<CartPage />} />
                  <Route path={"/order"} element={<OrderPage />} />
                  <Route
                    path={"/order/complete/:id"}
                    element={<OrderCompletePage />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </SkeletonTheme>
      </ToastContext.Provider>
    </div>
  );
}

export default App;
