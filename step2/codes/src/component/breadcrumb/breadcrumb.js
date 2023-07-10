import React, { useState } from 'react';
import './breadcrumb.css'

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
//dddddddddddddddddddddddddddddd
export default Breadcrumb;