import Header from '@components/organisms/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
