// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export let persistor = persistStore(store);

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Routes>
                            {/* 단독 레이아웃 */}
                            <Route path="/login" element={<LoginPage />}>
                                {" "}
                            </Route>
                            <Route path="/signup" element={<RegisterPage />}>
                                {" "}
                            </Route>
                            {/* 공통 레이아웃: GNB, Footer */}
                            <Route path="/" element={<MainPage />}>
                                {" "}
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
