import "./App.css";
import { useState } from "react";

import ToggleTest from "./pages/ToggleTest";
import Home from "./pages/Home";
import ToastTest from "./pages/ToastTest";
import ChecklistTest from "./pages/ChecklistTest";
import RadioTest from "./pages/RadioTest";
import BreadcrumbsTest from "./pages/BreadcrumbsTest";
import CarouselTest from "./pages/CarouselTest";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pages = [
    { id: 1, route: "home", name: "Home", component: <Home /> },
    { id: 2, route: "toggle-test", name: "Toggle", component: <ToggleTest /> },
    { id: 3, route: "toast-test", name: "Toast", component: <ToastTest /> },
    {
      id: 4,
      route: "breadcrumbs-test",
      name: "Breadcrumbs",
      component: <BreadcrumbsTest />,
    },
    {
      id: 5,
      route: "checklist-test",
      name: "Checklist",
      component: <ChecklistTest />,
    },
    { id: 6, route: "radio-test", name: "Radio", component: <RadioTest /> },
    {
      id: 7,
      route: "carousel-test",
      name: "Carousel",
      component: <CarouselTest />,
    },
  ];

  return (
    <div style={{ padding: "4rem", textAlign: "center", width: "500px" }}>
      <nav style={{ marginBottom: "3rem" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            fontSize: "0.8rem",
          }}
        >
          {pages.map((page) => (
            <li
              key={page.id}
              onClick={() => setCurrentPage(page.route)}
              className={currentPage === page.route ? "current" : ""}
            >
              {page.name}
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ margin: "0 3rem" }}>
        {pages.map(
          (page) =>
            currentPage === page.route && (
              <div key={page.id}>{page.component}</div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
