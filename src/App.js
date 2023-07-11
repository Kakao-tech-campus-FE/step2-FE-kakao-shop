import { Outlet } from "react-router-dom";
import Header from "./components/templates/Header";
import Container from "./components/atoms/Container";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense } from "react";

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
      <Container className="w-full h-full pt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
