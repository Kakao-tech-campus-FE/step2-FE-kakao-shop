import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
