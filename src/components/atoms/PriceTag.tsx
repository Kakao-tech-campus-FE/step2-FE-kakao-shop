import React from 'react';

interface PriceTagProps {
  children: React.ReactNode;
}

const PriceTag = ({ children }: PriceTagProps) => {
  return (
    <span className="px-4 py-2 rounded-card font-semibold text-white bg-pointPupple shadow-convex">{children}</span>
  );
};

export default PriceTag;
