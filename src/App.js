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

const staticServerUri = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              path={staticServerUri + routes.register}
              element={<RegisterPage />}
            />
            <Route
              path={staticServerUri + routes.home}
              element={<HomePage />}
            />
            <Route
              path={staticServerUri + routes.login}
              element={<LoginPage />}
            />
            <Route
              path={staticServerUri + routes.cart}
              element={<CartPage />}
            />
            <Route
              path={staticServerUri + routes.orders}
              element={<OrderPage />}
            />
            <Route path={`${staticServerUri}/*`} element={<NotFoundPage />} />
            <Route
              path={`${staticServerUri}/product/:id`}
              element={<ProductDetailPage />}
            ></Route>
            <Route
              path={`${staticServerUri}/orders/:id`}
              element={<OrderCompletePage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
