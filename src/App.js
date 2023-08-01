import { Outlet } from "react-router-dom";
import Header from "./components/templates/Header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";
import Loader from "./components/molecules/Common/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/organisms/Footer/Footer";

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
      <div className="w-full min-h-full pt-20">
        <Suspense fallback={<Loader height="h-full" />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <ToastContainer limit={2} theme={"dark"} style={{ width: "750px" }} />
    </QueryClientProvider>
  );
}

export default App;
