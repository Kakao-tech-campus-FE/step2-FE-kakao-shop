import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CompleteOrderPage from "./pages/CompleteOrderPage";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export let persistor = persistStore(store);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          <BrowserRouter>
            <Routes>
              <Route path={routes.register} element={<RegisterPage />} />
              <Route path={routes.home} element={<HomePage />} />
              <Route path={routes.login} element={<LoginPage />} />
              <Route path={routes.cart} element={<CartPage />} />
              <Route path={routes.orders} element={<OrderPage />} />
              <Route path="/*" element={<NotFoundPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetailPage />}
              ></Route>
              <Route path="/orders/:id" element={<CompleteOrderPage />}></Route>
            </Routes>
          </BrowserRouter>
          {/* </PersistGate> */}
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
