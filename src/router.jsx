import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "@/constants/routes.js";
import Product from "@/pages/Product.jsx";
import Cart from "@/pages/Cart.jsx";

const Home = lazy(() => import("@/pages/Home.jsx"));
const SignIn = lazy(() => import("@/pages/SignIn.jsx"));
const SignUp = lazy(() => import("@/pages/SignUp.jsx"));

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
]);

export default router;
