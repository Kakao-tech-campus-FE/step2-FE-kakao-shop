import React, { Fragment, useState } from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const [breadcrumb, setBreadcrumb] = useState(['home', 'pruduct', 'review', 'hello', 'world']);

  const handleBreadcrumbClick = (index: number) => {
    const updatedBreadcrumb = breadcrumb.slice(0, index + 1);
    setBreadcrumb(updatedBreadcrumb);
  };

  return (
    <span className='breadcrumb'>
      {breadcrumb.map((item, index) => (
        <Fragment key={item}>
          {index !== 0 && <span>/</span>}
          <button className='item' type='button' onClick={() => handleBreadcrumbClick(index)}>
            {item}
          </button>
        </Fragment>
      ))}
    </span>
  );
};

export default Breadcrumb;
