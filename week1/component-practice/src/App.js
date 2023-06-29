import "./App.css";
import { useState } from "react";

import ToggleTest from "./pages/ToggleTest";
import Home from "./pages/Home";
import ToastTest from "./pages/ToastTest";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div style={{ padding: "4rem", textAlign: "center", width: "500px" }}>
      <nav style={{ marginBottom: "3rem" }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            fontSize: "0.8rem",
          }}
        >
          <li onClick={() => setCurrentPage("home")}>Home</li>
          <li onClick={() => setCurrentPage("toggle-test")}>Toggle</li>
          <li onClick={() => setCurrentPage("toggle-test")}>Breadcrumbs</li>
          <li onClick={() => setCurrentPage("toast-test")}>Toast</li>
          <li onClick={() => setCurrentPage("toggle-test")}>Checklist</li>
          <li onClick={() => setCurrentPage("toggle-test")}>Radio</li>
          <li onClick={() => setCurrentPage("toggle-test")}>Carousel</li>
        </ul>
      </nav>

      <div style={{ margin: "0 3rem" }}>
        {currentPage === "home" && <Home />}
        {currentPage === "toggle-test" && <ToggleTest />}
        {currentPage === "toast-test" && <ToastTest />}
      </div>
    </div>
  );
}

export default App;
