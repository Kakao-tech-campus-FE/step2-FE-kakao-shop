import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { LoaderContainer, DefaultSpinner } from "react-global-loader";
import * as paths from "./constants/urls";
import OrderCompletePage from "./pages/OrderCompletePage";

function App() {
  return (
    <div className="App">
      <LoaderContainer>
        <DefaultSpinner />
      </LoaderContainer>
      <BrowserRouter>
        <Routes>
          <Route path={paths.LOGIN_PATH} element={<LoginPage />} />
          <Route path={paths.SIGNUP_PATH} element={<RegisterPage />} />
          <Route element={<MainLayout />}>
            <Route path={paths.HOME_PATH} element={<HomePage />} />
            <Route
              path={paths.PRODUCT_DETAIL_PATH}
              element={<ProductDetailPage />}
            />
            <Route path={paths.ERROR_PATH} element={<ErrorPage />} />
          </Route>
          <Route path={paths.CART_PATH} element={<CartPage />} />
          <Route path={paths.ORDER_PATH} element={<OrderPage />} />
          <Route
            path={paths.ORDER_COMPLETE_PATH}
            element={<OrderCompletePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
