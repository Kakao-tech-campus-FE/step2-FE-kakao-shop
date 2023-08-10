import React from 'react';
import Box from '../components/atoms/Box';

const EmptyCartPage = () => {
  return (
    <div className="bg-gray-100 py-5 min-h-[500px]">
      <div className="max-w-[1024px] w-[100%] mx-auto">
        <Box className="text-xl font-bold text-center border bg-white py-2">
          <h1>장바구니</h1>
        </Box>
        <Box className="bg-white my-1 py-1 border text-center">
          <div className='text-9xl font-black my-10'>텅 ..</div>
          <div className='text-xl text-gray-400 my-3'>장바구니가 텅 비어있어요</div>
        </Box>
      </div>
    </div>
  );
};

export default EmptyCartPage;