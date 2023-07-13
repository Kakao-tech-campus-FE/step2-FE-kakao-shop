import React from 'react';

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className='block text-sm font-medium leading-6 text-gray-900'>
      {children}
    </label>
  );
};

export default Label;
