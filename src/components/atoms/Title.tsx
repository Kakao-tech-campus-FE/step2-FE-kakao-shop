import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="font-exo mb-[-20px] ml-5 font-extrabold text-title text-pointPupple pb-[20px] drop-shadow-Title">
      {children}
    </h1>
  );
};

export default Title;
