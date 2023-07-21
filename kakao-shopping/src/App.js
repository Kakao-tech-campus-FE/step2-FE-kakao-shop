// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

export let persistor = persistStore(store);
const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools initialIsOpen={true} />
                        <BrowserRouter>
                            <Routes>
                                {/* 단독 레이아웃 */}
                                <Route path="/login" element={<LoginPage />}>
                                    {" "}
                                </Route>
                                <Route
                                    path="/signup"
                                    element={<RegisterPage />}
                                >
                                    {" "}
                                </Route>
                                <Route
                                    path="/product/:id"
                                    element={<ProductDetailPage />}
                                >
                                    {" "}
                                </Route>
                                {/* 공통 레이아웃: GNB, Footer */}
                                <Route path="/" element={<MainPage />}>
                                    {" "}
                                </Route>
                                <Route path="/cart" element={<CartPage />}>
                                    {" "}
                                </Route>
                            </Routes>
                        </BrowserRouter>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
