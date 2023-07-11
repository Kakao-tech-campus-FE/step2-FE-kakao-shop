import { Outlet } from "react-router-dom";
import Header from "./components/templates/Header";
import Container from "./components/atoms/Container";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Container className="w-full h-full pt-20">
        <Outlet />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
