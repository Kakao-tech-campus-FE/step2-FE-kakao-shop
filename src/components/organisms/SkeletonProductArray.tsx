import React from 'react';
import SkeletonProductCard from '../molecules/SkeletonProductCard';

const SkeletonProductArray = () => {
  const SKELETON_ITEMS_LENGTH = 9;

  return (
    <>
      {Array.from({ length: SKELETON_ITEMS_LENGTH }, (v, i) => i).map((value) => {
        return <SkeletonProductCard key={value} />;
      })}
    </>
  );
};

export default SkeletonProductArray;
