import { Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import MainLayout from './components/layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import ErrorPage from './pages/ErrorPage';
import OrderPage from './pages/OrderPage';
import OrderCompletePage from './pages/OrderCompletePage';
import { Suspense } from 'react';
import Loader from './components/atoms/Loader';
import MainPageSkeleton from './components/molecules/MainPageSkeleton';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader className="productDetail" />}>
        <Routes>
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<MainPageSkeleton />}>
                  <MainPage />
                </Suspense>
              }
            />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order/complete/:id" element={<OrderCompletePage />} />
          </Route>
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
