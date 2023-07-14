// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import { ProvideAuth } from './contexts/AuthContext';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProvideAuth>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route element={<MainLayout />}>
              <Route path="/" element={<MainPage />} />
            </Route>
          </Routes>
        </ProvideAuth>
      </BrowserRouter>
    </div>
  );
}

export default App;