import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";

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
              <Route path={routes.orders} element={<OrdersPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetailPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
          {/* </PersistGate> */}
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
