// App.jsx
<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import Toast from './components/Toast';
import Breadcrumb from './components/Breadcrumb';
import Carousel from './components/Carousel';
import RadioButton from './components/RadioButton';
import ToggleButton from './components/ToggleButton';
import Checklist from './components/Checklist';
import './styles/App.css';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  }

  return (
    <div className="App">
      <h1>카카오 테크 캠퍼스 2단계 1주차 UI 컴포넌트</h1>
      <h3>1. Toast Component</h3>
      {showToast && <Toast message="Toast component Output" />}
      <button className="show-toast-button" onClick={handleButtonClick}>
        Toast Component Click
      </button>
      <hr></hr>
      <h3>2. Breadcrumb Component</h3>
      <Breadcrumb items={['Home', 'Main Menu', 'Sub Menu']} />
      <hr></hr>
      <h3>3. Carousel Component</h3>
      <Carousel />
      <hr></hr>
      <h3>4. RadioButton Component</h3>
      <RadioButton />
      <hr></hr>
      <h3>5. ToggleButton Component</h3>
      <ToggleButton />
      <hr></hr>
      <h3>6. Checklist Component</h3>
      <Checklist />
>>>>>>> 557f56a88f1cdbc76d800f690d46347612cf8d34
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 557f56a88f1cdbc76d800f690d46347612cf8d34
