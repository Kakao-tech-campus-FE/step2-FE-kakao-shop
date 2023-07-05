import React from 'react';
import './breadcrumb.css';

const breadcrumb = ({ items }) => {
  return (
    <nav>
      <ul className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default breadcrumb;