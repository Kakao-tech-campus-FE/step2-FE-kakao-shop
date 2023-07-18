import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import routes from "@/constants/routes.js";

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
    element: <div>hi</div>,
  },
]);

export default router;
