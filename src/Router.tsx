import { RootState } from '@store/index';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

import Approve from '@pages/Pay/Approve';
import Cancel from '@pages/Pay/Cancel';

import Footer from '@components/molecules/Footer';
import Header from '@components/molecules/Header';
import PageLoader from '@components/molecules/PageLoader';

const Home = lazy(() => import('@pages/Home'));
const ProductDetail = lazy(() => import('@pages/ProductDetail'));
const Cart = lazy(() => import('@pages/Cart'));
const Order = lazy(() => import('@pages/Order'));
const PayResult = lazy(() => import('@pages/PayResult'));
const SignUp = lazy(() => import('@pages/SignUp'));
const Login = lazy(() => import('@pages/Login'));
const Error = lazy(() => import('@pages/500'));
const NotFound = lazy(() => import('@pages/404'));

const Router = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/detail/:id'} element={<ProductDetail />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/payResult'} element={<PayResult />} />
          <Route path={'/pay/cancel'} element={<Cancel />} />
          <Route path={'/pay/Approve'} element={<Approve />} />

          <Route element={<PayRoute />}>
            <Route path={'/order'} element={<Order />} />
          </Route>
        </Route>

        <Route path={'/signup'} element={<SignUp />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/500'} element={<Error />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const PrivateRoute = () => {
  const isLogin = useSelector((state: RootState) => state.signIn.isLogin);

  return isLogin ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

const PublicRoute = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const PayRoute = () => {
  const isEnterNextPage = useSelector((state: RootState) => state.order.isEnterNextPage);

  if (!isEnterNextPage) alert('접근 권한이 없습니다.');

  return isEnterNextPage ? <Outlet /> : <Navigate to="/" replace />;
};

const Fallback = () => {
  return (
    <>
      <Header />
      <PageLoader />
      <Footer />
    </>
  );
};

export default Router;
