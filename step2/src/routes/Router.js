import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const Router = () => (
  <>
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  </>
);

export default Router;