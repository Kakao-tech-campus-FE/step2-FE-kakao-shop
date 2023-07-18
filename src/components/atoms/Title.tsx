import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="font-extrabold text-[40px] text-pointPupple pb-[20px]">{children}</h1>;
};

export default Title;
