import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes.js";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path={routes.register} element={<RegisterPage />} />
              <Route path={routes.home} element={<HomePage />} />
              <Route path={routes.login} element={<LoginPage />} />
              <Route path={routes.cart} element={<CartPage />} />
              <Route
                path="/product/:id"
                element={<ProductDetailPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
