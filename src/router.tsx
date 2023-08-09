import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Spinner from './components/common/atoms/Spinner';
import SkeletonList from './components/common/molecules/SkeletonList';

const MainPage = lazy(() => import('./pages/Main'));
const LoginPage = lazy(() => import('./pages/Login'));
const SignupPage = lazy(() => import('./pages/Signup'));
const DetailPage = lazy(() => import('./pages/Detail'));
const CartPage = lazy(() => import('./pages/Cart'));
const PayPage = lazy(() => import('./pages/Pay'));
const PaySuccessPage = lazy(() => import('./pages/PaySuccess'));
const Page404 = lazy(() => import('./pages/Error404'));
const Page500 = lazy(() => import('./pages/Error500'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<SkeletonList count={15} />}>
            <MainPage />
          </Suspense>
        ),
      },
      {
        path: '404',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <Page404 />
          </Suspense>
        ),
      },
      {
        path: '500',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <Page500 />
          </Suspense>
        ),
      },
      {
        path: 'product/:id',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <DetailPage />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: 'pay',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <PayPage />
          </Suspense>
        ),
      },
      {
        path: 'paySuccess',
        element: (
          <Suspense fallback={<Spinner width={60} height={60} />}>
            <PaySuccessPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Spinner width={60} height={60} />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<Spinner width={60} height={60} />}>
        <SignupPage />
      </Suspense>
    ),
  },
]);

export default router;
