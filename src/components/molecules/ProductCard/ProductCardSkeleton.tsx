import { Skeleton } from '@mui/material';
import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="mb-5 flex flex-col justify-center w-[230px]">
      <Skeleton variant="rounded" width={230} height={230} />
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <div className="absolute inset-x-0 bottom-0 mt-5">
          <Skeleton variant="text" width={100} height={40} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
