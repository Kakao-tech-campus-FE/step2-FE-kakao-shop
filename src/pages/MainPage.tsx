import React, { Suspense } from 'react';
import MainProductTemplate from '../components/templates/MainProductTemplate';
import Loader from '../components/atoms/Loader';

const MainPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MainProductTemplate />
    </Suspense>
  );
};

export default MainPage;
