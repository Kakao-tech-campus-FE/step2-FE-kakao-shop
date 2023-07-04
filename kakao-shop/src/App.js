import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
