import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={`m-auto max-w-[1280px] ${className}`}>{children}</div>;
};

export default Container;
