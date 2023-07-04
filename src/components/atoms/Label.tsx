import React, { ReactNode } from 'react';

interface labelProps {
  htmlFor?: string;
  child?: ReactNode;
}
const Label = ({ htmlFor, child }: labelProps) => {
  return <label htmlFor={htmlFor}>{child}</label>;
};

export default Label;
