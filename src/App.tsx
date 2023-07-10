import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "@components/common/ErrorBoundray.component";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { isExpired } from "@/functions/jwt";
import { getAuth, removeAuth } from "@/functions/auth";

const App = () => {
  useEffect(() => {
    if (isExpired(getAuth() ?? "")) {
      removeAuth();
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
