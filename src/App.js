import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";
import Container from "./components/atoms/Container";

function App() {
  return (
    <>
      <Header />
      <Container className="w-full h-full pt-20">
        <Outlet />
      </Container>
    </>
  );
}

export default App;
