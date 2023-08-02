import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "@/constants/routes.js";
import Order from "@/pages/Order.jsx";
import GlobalLoader from "@/pages/GlobalLoader.jsx";

const Home = lazy(() => import("@/pages/Home.jsx"));
const SignIn = lazy(() => import("@/pages/SignIn.jsx"));
const SignUp = lazy(() => import("@/pages/SignUp.jsx"));
const Product = lazy(() => import("@/pages/Product.jsx"));
const Cart = lazy(() => import("@/pages/Cart.jsx"));
const NotFound = lazy(() => import("@/pages/NotFound.jsx"));
import OrderResult from "@/pages/OrderResult.jsx";
// import NotFound from "@/pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "",
    loader: GlobalLoader,
    // errorElement: <NotFound />,
    children: [
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
        errorElement: (
          <NotFound
            title="상품 아이디 에러"
            description="해당 상품 아이디가 존재하지 않습니다"
          />
        ),
      },
      {
        path: routes.cart,
        element: <Cart />,
      },
      {
        path: routes.order,
        element: <Order />,
      },
      {
        path: `${routes.orderResult}/:orderId`,
        element: <OrderResult />,
      },
    ],
  },
]);

export default router;
