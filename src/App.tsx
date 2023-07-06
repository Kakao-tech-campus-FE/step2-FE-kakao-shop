import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "@components/common/ErrorBoundray.component";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { isExpired } from "@/functions/jwt";
import { localStorage } from "@/functions/localstorage";

const App = () => {
  useEffect(() => {
    if (isExpired(localStorage.get("Authorization") ?? "")) {
      localStorage.remove("Authorization");
    }
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
