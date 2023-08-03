import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import PrivateRoute from "./utils/PrivateRoute";
import ResultPage from "./pages/ResultPage";
import PayRedirectPage from "./pages/PayRedirectPage";
import CanceledOrderPage from "./pages/CanceledOrderPage";
import PublicRoute from "./utils/PublicRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/product/:id", element: <ProductDetailPage /> },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/order",
          element: (
            <PrivateRoute>
              <OrderPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/result",
          element: (
            <PrivateRoute>
              <ResultPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/pay_redirect",
          element: (
            <PrivateRoute>
              <PayRedirectPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/canceled_order",
          element: (
            <PrivateRoute>
              <CanceledOrderPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <SignupPage />
        </PublicRoute>
      ),
    },
  ],
  { basename: process.env.REACT_APP_PATH || "" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
