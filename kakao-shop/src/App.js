import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
