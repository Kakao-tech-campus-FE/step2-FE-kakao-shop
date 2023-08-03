import './Skeleton.css';

import React from 'react';

const Skeleton = () => {
  return (
    <li className='skeleton-item'>
      <div>
        <div className='skeleton-img' />
      </div>
      <div className='skeleton-info'>
        <p className='skeleton-name'/>
        <p className='skeleton-email'/>
      </div>
    </li>
  );
};

export default Skeleton;