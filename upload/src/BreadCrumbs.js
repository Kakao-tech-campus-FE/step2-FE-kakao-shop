import React from 'react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}>
            <span>{item.text}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
