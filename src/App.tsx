import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";
import ErrorBoundary from "@components/common/ErrorBoundray.component";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { isExpired } from "@/functions/jwt";
import { getAuth, removeAuth } from "@/functions/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    if (isExpired(getAuth() ?? "")) {
      removeAuth();
    }

    // Remove loading spinner in index.html
    document.querySelector(".lds-ring")?.remove();
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
