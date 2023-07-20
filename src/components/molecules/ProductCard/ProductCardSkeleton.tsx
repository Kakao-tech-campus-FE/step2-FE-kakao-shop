import { Skeleton } from '@mui/material';
import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" width={190} height={190} />
      <Skeleton variant="text" sx={{ fontSize: 'lg' }} />
      <Skeleton variant="text" />
    </>
  );
};

export default ProductCardSkeleton;
