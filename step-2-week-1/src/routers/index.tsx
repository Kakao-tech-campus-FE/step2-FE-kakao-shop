import BreadcrumbPage from "@/pages/Breadcrumb.page";
import CarouselPage from "@/pages/Carousel.page";
import CheckListPage from "@/pages/CheckList.page";
import RadioButtonPage from "@/pages/RadioButton.page";
import Toast from "@/pages/Toast.page";
import TogglePage from "@/pages/Toggle.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <h1>hello world</h1>,
    path: "/",
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
