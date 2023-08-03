import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";
import { useQueryClient } from "react-query";
import useApiError from "./hooks/useApiError";
import RequiredAuthLayout from "./layouts/RequiredAuthLayout";
import OrderPage from "./pages/OrderPage";
import OrderCompletePage from './pages/OrderCompletePage';

function App() {
    const staticServerUri = process.env.REACT_APP_PATH || "";
    const { handleError } = useApiError();
    const queryClient = useQueryClient();

    queryClient.setDefaultOptions({
    queries: { onError: (error) => handleError(error) },
    mutations: {
      onError: (error) => {
        handleError(error);
      },
    },
  });

    return (
        <div className="App">
            <BrowserRouter basename={staticServerUri}>
                <Routes>
                    {/*단독 레이아웃*/}
                    <Route path={staticServerUri + "/login"} element={<LoginPage />}></Route>
                    <Route path={staticServerUri + "/signup"} element={<RegisterPage />}></Route>
                    {/*공통 레이아웃: GNB, FOOTER*/}
                    <Route element={<MainLayout />}> {/* 레이아웃은 별도의 경로를 지정하지 않음 */}
                        <Route path={staticServerUri + "/"} element={<HomePage />}></Route>
                        <Route path={staticServerUri + "/product/:id"} element={<ProductDetailPage />}></Route>
                    </Route>
                    <Route element={<RequiredAuthLayout />} >
                        <Route path={staticServerUri + "/cart"} element={<CartPage />}></Route>
                        <Route path={staticServerUri + "/order"} element={<OrderPage />}></Route>
                        <Route path={staticServerUri + "/orders/complete/:id"} element={<OrderCompletePage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
