import '../../styles/atoms/Container.css';
import React from 'react';
// Container
// props : children : 담을 내용
function Container({ children, className }) {
  return <div className={`container ${className}`}> {children} </div>;
}

export default Container;
