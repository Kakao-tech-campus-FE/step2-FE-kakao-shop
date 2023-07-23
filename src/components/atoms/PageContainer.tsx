import React from 'react';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div className="flex justify-center w-full mt-header pt-16">
      <div className="min-w-container">
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;
