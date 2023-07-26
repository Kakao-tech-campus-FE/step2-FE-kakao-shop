import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "@/constants/routes.js";

const Home = lazy(() => import("@/pages/Home.jsx"));
const SignIn = lazy(() => import("@/pages/SignIn.jsx"));
const SignUp = lazy(() => import("@/pages/SignUp.jsx"));
const Product = lazy(() => import("@/pages/Product.jsx"));
const Cart = lazy(() => import("@/pages/Cart.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.signIn,
    element: <SignIn />,
  },
  {
    path: routes.signUp,
    element: <SignUp />,
  },
  {
    path: `${routes.product}/:productId`,
    element: <Product />,
  },
  {
    path: routes.cart,
    element: <Cart />,
  },
  {
    path: routes.order,
    element: <div>주문하기</div>,
  },
]);

export default router;
