import React from 'react';
import SkeletonProductCard from '../molecules/SkeletonProductCard';

const SkeletonProductGrid = () => {
  return (
    <div className='my-1 grid w-full grid-cols-4 gap-5'>
      {Array.from({ length: 10 }, (v, i) => i).map((value) => {
        return <SkeletonProductCard key={value} />;
      })}
    </div>
  );
};

export default SkeletonProductGrid;
