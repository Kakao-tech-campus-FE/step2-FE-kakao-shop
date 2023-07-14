import React from 'react';

const SkeletonProductCard = () => {
  return (
    <div className='mb-10 animate-pulse'>
      <div className='flex aspect-[3/2] w-full items-center justify-center rounded-2xl bg-gray-300 object-cover '>
        <svg
          className='h-10 w-10 text-gray-200'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 20 18'
        >
          <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
        </svg>
      </div>
      <div className='pt-6'>
        <p className='mb-2.5 h-2.5 w-32 rounded-2xl bg-gray-200 text-sm' />
        <p className='h-2 w-24 rounded-2xl bg-gray-200 text-xl font-bold' />
      </div>
    </div>
  );
};
export default SkeletonProductCard;
