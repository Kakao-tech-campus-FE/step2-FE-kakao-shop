import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/molecules/Footer';
import GNB from '../components/molecules/GNB';

const MainLayout = () => {
  return (
    <div>
      <GNB />
      <div className='flex h-full min-h-screen flex-col pt-14'>
        <div className='grow'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
