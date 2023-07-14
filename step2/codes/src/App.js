import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";
import { useQueryClient } from "react-query";
import useApiError from "./hooks/useApiError";

function App() {

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
            <BrowserRouter>
                <Routes>
                    {/*단독 레이아웃*/}
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/signup" element={<RegisterPage />}></Route>
                    {/*공통 레이아웃: GNB, FOOTER*/}
                    <Route element={<MainLayout />}> {/* 레이아웃은 별도의 경로를 지정하지 않음 */}
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/product/:id" element={<ProductDetailPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
