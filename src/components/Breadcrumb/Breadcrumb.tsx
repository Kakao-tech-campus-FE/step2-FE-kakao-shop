import React, { Fragment } from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const routes = ['home', 'pruduct', 'review'];

  return (
    <span className='breadcrumb'>
      {routes.map((route, index) => (
        <Fragment key={route}>
          {index !== 0 && <span>/</span>}
          <button className='route' type='button'>
            {route}
          </button>
        </Fragment>
      ))}
    </span>
  );
};

export default Breadcrumb;
