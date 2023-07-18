import { createBrowserRouter } from "react-router-dom";
import BreadcrumbPage from "@/pages/test/Breadcrumb.page";
import SignInPage from "@/pages/Sign/SignIn.page";
import SignUpPage from "@/pages/Sign/SignUp.page";
import HomePage from "@/pages/Home/Home.page";
import Toast from "@/pages/test/Toast.page";
import CarouselPage from "@/pages/test/Carousel.page";
import RadioButtonPage from "@/pages/test/RadioButton.page";
import TogglePage from "@/pages/test/Toggle.page";
import CheckListPage from "@/pages/test/CheckList.page";
import ProductDetailPage from "@/pages/Product/ProductDetail.page";
import ErrorPage from "@/pages/Error/Error.page";

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
    element: <ProductDetailPage />,
    path: "/product/:productId",
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
  {
    element: <ErrorPage />,
    path: "/error/:id",
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
]);

export { router };
