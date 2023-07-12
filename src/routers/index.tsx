import { createBrowserRouter } from "react-router-dom";
import BreadcrumbPage from "@/pages/Breadcrumb.page";
import CarouselPage from "@/pages/Carousel.page";
import CheckListPage from "@/pages/CheckList.page";
import RadioButtonPage from "@/pages/RadioButton.page";
import SignInPage from "@/pages/SignIn.page";
import SignUpPage from "@/pages/SignUp.page";
import Toast from "@/pages/Toast.page";
import TogglePage from "@/pages/Toggle.page";
import HomePage from "@/pages/Home.page";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <SignUpPage />,
    path: "/signup",
  },
  {
    element: <SignInPage />,
    path: "/signin",
  },
  {
    element: <Toast />,
    path: "/toast",
  },
  {
    element: <BreadcrumbPage />,
    path: "/breadcrumb",
  },
  {
    element: <CarouselPage />,
    path: "/carousel",
  },
  {
    element: <RadioButtonPage />,
    path: "/radio-button",
  },
  {
    element: <TogglePage />,
    path: "/toggle",
  },
  {
    element: <CheckListPage />,
    path: "/check-list",
  },
]);

export { router };
