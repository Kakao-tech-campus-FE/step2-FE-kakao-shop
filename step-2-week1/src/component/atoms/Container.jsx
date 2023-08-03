import '../../styles/atoms/Container.css'
import React from 'react';

const Container = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}
  </div>;
};

export default Container;