import React from 'react';

interface SubContainerProps {
  children: React.ReactNode;
}

const SubContainer = ({ children }: SubContainerProps) => {
  return <div className='absolute bottom-0 left-0 right-0 top-0 m-auto h-fit w-96'>{children}</div>;
};

export default SubContainer;
