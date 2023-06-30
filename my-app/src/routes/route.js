import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import Sub from '../pages/Sub';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/subpage" element={<Sub />} />
    </Routes>
  );
};

export default AppRoutes;
