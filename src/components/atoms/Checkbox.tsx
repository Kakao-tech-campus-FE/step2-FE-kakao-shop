import React from 'react';

interface CheckboxProps {
  id: string;
  ref?: React.MutableRefObject<null>;
  name?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}
const Checkbox = ({ id, ref, name, checked, onChange, children }: CheckboxProps) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} ref={ref} name={name} checked={checked} onChange={onChange} />
      {children}
    </label>
  );
};

export default Checkbox;
