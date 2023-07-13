import React, { ReactNode } from 'react';

interface LabelProps {
  id: string;
  children: ReactNode;
}
function Label({ id, children }: LabelProps) {
  return (
    <label style={{ display: 'block' }} htmlFor={id}>
      {children}
    </label>
  );
}

export default Label;
