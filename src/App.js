import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/atoms/Loader";

// layouts
import MainLayout from "./layouts/MainLayout";
import GeneralLayout from "./layouts/GeneralLayout";

// pages
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import OrderFailPage from "./pages/OrderFailPage";
import OrderTempPage from "./pages/OrderTempPage";
import ErrorPage from "./pages/ErrorPage";

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
    return (
        <div className="App">
          <Suspense fallback={<Loader />}>
            <BrowserRouter basename={staticServerUri}>
              <Routes>
                {/* 단독 레이아웃 */}
                <Route path={staticServerUri + "/login"} element={<LoginPage />}/>
                <Route path={staticServerUri + "/register"} element={<RegisterPage />}/>
                <Route path={staticServerUri + "/notFound"} element={<NotFoundPage />} />
                <Route path={staticServerUri + "/error"} element={<ErrorPage />} />
                
                {/* 공통 레이아웃 */}
                <Route element={<MainLayout />}>
                  <Route path={staticServerUri + "/"} element={<HomePage />} />
                </Route>
                <Route element={<GeneralLayout />}>
                  <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage />} />
                  <Route path={staticServerUri + "/cart"} element={<CartPage />} />
                  <Route path={staticServerUri + "/order"} element={<OrderPage />} />
                  <Route path={staticServerUri + "/order/temp"} element={<OrderTempPage />} />
                  <Route path={staticServerUri + "/order/success"} element={<OrderSuccessPage />} />
                  <Route path={staticServerUri + "/order/fail"} element={<OrderFailPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </div>
    );
}

export default App;