import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ComponentTest from './pages/ComponentTest';
import HomePage from './pages/Main';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ComponentTest" element={<ComponentTest />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
