import React from 'react';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div className="flex justify-center w-full mt-header pt-16">
      <div className="max-w-container">
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;
