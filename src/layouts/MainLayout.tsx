import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/molecules/Footer';
import GNB from '../components/molecules/GNB';

const MainLayout = () => {
  return (
    <div>
      <GNB />
      <div className='pt-14'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
