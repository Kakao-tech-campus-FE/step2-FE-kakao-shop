// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('isLoggedIn');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <MainPage
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
