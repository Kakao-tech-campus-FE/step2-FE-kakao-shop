import { Outlet } from "react-router-dom";
import Header from "./components/templates/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import Loader from "./components/atoms/Loader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="w-full h-full pt-20">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
