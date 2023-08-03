import '../../styles/atoms/SkeletonCard.css';
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-wrapper">
        <div className="skeleton-image" />
      </div>
      <div className="skeleton-product-name" />
      <div className="skeleton-product-price" />
    </div>
  );
};

export default SkeletonCard;
