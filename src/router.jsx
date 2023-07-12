import { createBrowserRouter } from "react-router-dom";
import routes from "@/constants/routes.js";
import Home from "@/pages/Home.jsx";
import SignIn from "@/pages/SignIn.jsx";
import SignUp from "@/pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: routes.signUp,
    element: <SignUp />,
  },
]);

export default router;
