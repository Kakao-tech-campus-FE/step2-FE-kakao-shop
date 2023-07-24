import { Skeleton } from '@mui/material';
import React from 'react';

const ProductDetailTemplateSkeleton = () => {
  return (
    <div className="flex space-x-5 p-[30px]">
      <Skeleton variant="rounded" width={500} height={500} />
      <div className="p-[30px]">
        <div className="mb-[130px]">
          <Skeleton variant="text" width={400} height={60} />
          <Skeleton variant="text" width={300} height={60} />
        </div>
        <Skeleton variant="text" width={470} height={60} />
        <hr />
        <div className="flex justify-between mt-3 mb-[40px]">
          <Skeleton variant="text" width={100} height={30} />
          <Skeleton variant="text" width={140} height={30} />
        </div>
        <div className="flex justify-end space-x-3">
          <Skeleton variant="text" width={150} height={50} />
          <Skeleton variant="text" width={90} height={50} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTemplateSkeleton;
