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
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/notFound" element={<NotFoundPage />} />
                <Route path="/error" element={<ErrorPage />} />
                
                {/* 공통 레이아웃 */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                </Route>
                <Route element={<GeneralLayout />}>
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/order/temp" element={<OrderTempPage />} />
                  <Route path="/order/success" element={<OrderSuccessPage />} />
                  <Route path="/order/fail" element={<OrderFailPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </div>
    );
}

export default App;