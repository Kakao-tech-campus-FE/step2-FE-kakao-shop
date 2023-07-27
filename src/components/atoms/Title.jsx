import React from 'react';

export default function Title({ children }) {
  return (
    <>
      <h1 className='mt-14 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900'>
        {children}
      </h1>
      <div className='border-b my-4'></div>
    </>
  );
}
