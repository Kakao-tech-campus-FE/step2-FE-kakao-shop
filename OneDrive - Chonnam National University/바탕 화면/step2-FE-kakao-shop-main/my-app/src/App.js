import React from "react"; // eslint-disable-line no-unused-vars
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Carousel from "./components/atoms/Carousel";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import NotFoundPage from "./pages/NotFoundPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"; // eslint-disable-line no-unused-vars

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<RegisterPage />}></Route>

        {/* UI Components */}
        <Route path="/carousel" element={<Carousel />}></Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
        </Route>
        <Route element={<RequiredAuthLayout />}>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/orders/complete/:id" element={<OrderCompletePage />}></Route>
        </Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;