import React from 'react';
import { Outlet } from 'react-router-dom';

const PageContainer = () => {
  return (
    <div className="w-full mt-header pt-16">
      <Outlet />
    </div>
  );
};

export default PageContainer;
