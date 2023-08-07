import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import { LoaderContainer, DefaultSpinner } from "react-global-loader";
import ErrorPage from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderCompletePage from "./pages/OrderCompletePage";

function App() {
  return (
    <div className="App">
      <LoaderContainer>
        <DefaultSpinner />
      </LoaderContainer>
      <BrowserRouter>
        {/*단독 레이아웃*/}
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          <Route path="/error" element={<ErrorPage />}></Route>

          {/*공통 레이아웃 : GNB. FOOTER*/}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          </Route>
          <Route element={<RequiredAuthLayout />}>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/order" element={<OrderPage />}></Route>
            <Route
              path="/orders/complete/:id"
              element={<OrderCompletePage />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
