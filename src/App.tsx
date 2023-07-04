import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "./components/common/ErrorBoundray.component";

const App = () => (
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);

export default App;
