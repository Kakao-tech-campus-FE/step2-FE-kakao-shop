import { Outlet } from "react-router-dom";
import Header from "./components/organisms/Header";

function App() {
  return (
    <>
      <Header />
      <div className="w-full h-full pt-20">
        <Outlet />
      </div>
    </>
  );
}

export default App;
