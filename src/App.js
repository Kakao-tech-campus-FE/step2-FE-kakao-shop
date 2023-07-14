import { BrowserRouter, Routes, Route } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Suspense, lazy } from "react";
import Loader from "./components/atoms/Loader";

// const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
    return (
        <div className="App">
          <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Routes>
                {/* 단독 레이아웃 */}
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/notFound" element={<NotFoundPage />} />
                {/* 공통 레이아웃 */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Suspense>
        </div>
    );
}

export default App;