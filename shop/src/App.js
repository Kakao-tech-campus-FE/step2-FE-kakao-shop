import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from '../src/pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import HomePage from '../src/pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';
const staticServerUrl = process.env.REACT_APP_PATH || "";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={staticServerUrl}>
        {/* 단독 레이아웃 */}
        <Routes>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<RegisterPage/>}></Route>
          {/* 공통 레이아웃 :GNB, Footer*/}
          <Route element={<MainLayout/>}>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/product/:id' element={<ProductDetailPage/>}></Route>
            <Route path='/carts' element={<CartPage/>}></Route>
            <Route path='/orders' element={<OrderPage/>}></Route>
            <Route path='/orders/:id' element={<OrderCompletePage/>}></Route>
            {/* 404 에러 페이지 */}
            <Route path="/404" element={<NotFoundPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
