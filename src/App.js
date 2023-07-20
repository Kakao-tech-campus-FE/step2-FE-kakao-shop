import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import MainLayout from "./components/layouts/MainLayout";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import {SkeletonTheme} from "react-loading-skeleton";

function App() {
    return (
        <div className="App">
            <SkeletonTheme color="#202020" highlightColor="#aaa">
                <BrowserRouter>
                    <Routes>
                        <Route path="/signup" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route element={<MainLayout/>}>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/product/:id" element={<ProductDetailPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </SkeletonTheme>
        </div>
    );
}


export default App;