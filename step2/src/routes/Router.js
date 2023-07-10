import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../components/pages/MainPage';
import SignupPage from '../components/pages/SignupPage';
import LoginPage from '../components/pages/LoginPage';

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