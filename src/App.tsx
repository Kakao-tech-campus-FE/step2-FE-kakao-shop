import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "@components/common/ErrorBoundray.component";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { jwtDecode } from "@/functions/jwt";
import { localStorage } from "@/functions/localstorage";

const App = () => {
  useEffect(() => {
    const jwtPayload = jwtDecode(localStorage.get("Authorization") ?? "");
    if (jwtPayload && jwtPayload.exp < Date.now() / 1000) {
      localStorage.remove("Authorization");
      localStorage.remove("isLogin");
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
