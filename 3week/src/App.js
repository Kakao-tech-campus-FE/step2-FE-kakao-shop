import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import MainLayout from "./layouts/MainLayout"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 단독 레이아웃 */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
          {/* 공통 레이아웃: GNB, Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
