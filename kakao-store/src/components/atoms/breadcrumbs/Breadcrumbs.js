import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = ({ paths }) => {
  return (
    <div className="breadcrumbs">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="separator">/</span>}
          <span>{path.label}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
