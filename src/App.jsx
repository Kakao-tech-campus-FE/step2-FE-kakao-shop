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

const staticServerUrl = process.env.REACT_APP_PATH || '';

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader className="productDetail" />}>
        <Routes>
          <Route
            path={staticServerUrl + '/signup'}
            element={<RegisterPage />}
          />
          <Route path={staticServerUrl + '/login'} element={<LoginPage />} />
          <Route element={<MainLayout />}>
            <Route
              path={staticServerUrl + '/'}
              element={
                <Suspense fallback={<MainPageSkeleton />}>
                  <MainPage />
                </Suspense>
              }
            />
            <Route
              path={staticServerUrl + '/product/:id'}
              element={<ProductDetailPage />}
            />
            <Route path={staticServerUrl + '/cart'} element={<CartPage />} />
            <Route path={staticServerUrl + '/order'} element={<OrderPage />} />
            <Route
              path={staticServerUrl + '/order/complete/:id'}
              element={<OrderCompletePage />}
            />
          </Route>
          <Route path={staticServerUrl + '/error'} element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
