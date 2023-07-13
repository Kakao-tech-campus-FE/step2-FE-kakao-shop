import React, { ReactNode } from 'react';

interface HelperTextProps {
  className?: string;
  children?: ReactNode;
}

const HelperText = ({ className, children }: HelperTextProps) => {
  return <div className={className}>{children}</div>;
};

export default HelperText;
