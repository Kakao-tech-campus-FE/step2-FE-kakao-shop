import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Mainpage from "./pages/Mainpage/Mainpage";
import Subpage from "./pages/Subpage/Subpage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/main-page" element={<Mainpage />} />
          <Route path="/sub-page" element={<Subpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
