import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

const Router = () => (
  <>
    <Routes>
      <Route path="/" element={< ></>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </>
);

export default Router;