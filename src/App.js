import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
