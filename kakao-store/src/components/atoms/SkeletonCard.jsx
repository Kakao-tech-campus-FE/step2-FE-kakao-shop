import React from 'react';
import Card from './Card';

const SkeletonCard = () => {
  return (
    <div>
      {/* Usage of the Card component */}
      <Card to="/some-route" className="bg-fafafa mb-3 rounded border border-solid p-2">
        {/* Your content goes here */}
      </Card>
    </div>
  );
};

export default SkeletonCard;
