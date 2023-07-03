import React from 'react';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>{path}</span>
      ))}
    </nav>
  );
};

export default Breadcrumb;