import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "@components/common/ErrorBoundray.component";
import { Provider } from "react-redux";
import store from "@/store";

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ErrorBoundary>
);

export default App;
