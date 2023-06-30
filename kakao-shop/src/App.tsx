import {
  Route,
  Routes,
  BrowserRouter,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import { TestPage } from "./pages";
import Breadcrumb from "./components/@base/BreadCrumb";
import { useEffect, useState, ReactElement } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TestPage />} />

        <Route element={<BreadcrumbTest />}>
          <Route
            path={"/level1"}
            element={
              <div>
                level1
                <Link to="/level2">level2</Link>
              </div>
            }
          />
          <Route
            path={"/level2"}
            element={
              <div>
                level2
                <Link to="/level3">level3</Link>
              </div>
            }
          />
          <Route
            path={"/level3"}
            element={
              <div>
                level3
                <Link to="/level1">level1</Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const BreadcrumbTest = () => {
  const { pathname } = useLocation();
  const [item, setItem] = useState<ReactElement[]>([]);

  useEffect(() => {
    switch (pathname) {
      case "/level1":
        setItem([<Breadcrumb.Item href="/level1">level 1</Breadcrumb.Item>]);
        break;
      case "/level2":
        setItem([
          <Breadcrumb.Item href="/level1">level 1</Breadcrumb.Item>,
          <Breadcrumb.Item href="/level2">level 2</Breadcrumb.Item>,
        ]);
        break;
      case "/level3":
        setItem([
          <Breadcrumb.Item href="/level1">level 1</Breadcrumb.Item>,
          <Breadcrumb.Item href="/level2">level 2</Breadcrumb.Item>,
          <Breadcrumb.Item href="/level3">Level 3</Breadcrumb.Item>,
        ]);
        break;
    }
  }, [pathname]);

  return (
    <div>
      <Breadcrumb>{item.map((item) => item)}</Breadcrumb>
      <Outlet />
    </div>
  );
};
