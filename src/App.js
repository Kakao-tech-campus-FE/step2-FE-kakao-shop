import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderCompletePage from "./pages/OrderCompletePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path={routes.register} element={<RegisterPage />} />
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.cart} element={<CartPage />} />
            <Route path={routes.orders} element={<OrderPage />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />}></Route>
            <Route path="/orders/:id" element={<OrderCompletePage />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
