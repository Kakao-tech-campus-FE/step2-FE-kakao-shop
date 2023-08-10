import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/molecules/Footer';
import GNB from '../components/molecules/GNB';

const SubLayout = () => {
  return (
    <div className='bg-gray-100'>
      <GNB />
      <div className='flex h-full min-h-screen flex-col pt-14'>
        <div className='mx-auto mb-3 w-full max-w-[1024px] grow'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SubLayout;
