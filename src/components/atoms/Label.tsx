import React, { ReactNode } from 'react';

interface labelProps {
  htmlFor?: string;
  children?: ReactNode;
}
const Label = ({ htmlFor, children }: labelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
