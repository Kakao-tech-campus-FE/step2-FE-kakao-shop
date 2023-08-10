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

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <div className="App">
      <LoaderContainer>
        <DefaultSpinner />
      </LoaderContainer>
      <BrowserRouter>
        <Routes>
          <Route
            path={staticServerUri + paths.LOGIN_PATH}
            element={<LoginPage />}
          />
          <Route
            path={staticServerUri + paths.SIGNUP_PATH}
            element={<RegisterPage />}
          />
          <Route element={<MainLayout />}>
            <Route
              path={staticServerUri + paths.HOME_PATH}
              element={<HomePage />}
            />
            <Route
              path={staticServerUri + paths.PRODUCT_DETAIL_PATH}
              element={<ProductDetailPage />}
            />
            <Route
              path={staticServerUri + paths.ERROR_PATH}
              element={<ErrorPage />}
            />
            <Route
              path={staticServerUri + paths.CART_PATH}
              element={<CartPage />}
            />
            <Route
              path={staticServerUri + paths.ORDER_PATH}
              element={<OrderPage />}
            />
            <Route
              path={staticServerUri + paths.ORDER_COMPLETE_PATH}
              element={<OrderCompletePage />}
            />
          </Route>
          <Route
            path={staticServerUri + paths.CART_PATH}
            element={<CartPage />}
          />
          <Route
            path={staticServerUri + paths.ORDER_PATH}
            element={<OrderPage />}
          />
          <Route
            path={staticServerUri + paths.ORDER_COMPLETE_PATH}
            element={<OrderCompletePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
