/* eslint-disable */

import '../../styles/BreadCrumb.scss';
import React from 'react';

const BreadCrumb = ({ route }) => {
  return (
    <nav>
      <ol className="breadcrumb">
        {route.map((key) => (
          <li key={key} className="breadcrumb-item" aria-current="page">
            {key}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
