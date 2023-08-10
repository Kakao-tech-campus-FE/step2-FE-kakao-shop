import React from 'react';

interface CheckboxProps {
  id: string;
  ref?: React.MutableRefObject<null>;
  name?: string;
  required?: boolean;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}
const Checkbox = ({ id, ref, name, required, checked, onChange, children }: CheckboxProps) => {
  return (
    <label htmlFor={id} className="flex gap-2">
      <input type="checkbox" id={id} ref={ref} name={name} checked={checked} onChange={onChange} />
      {children}
      {required && <span className="text-subRed">(필수)</span>}
    </label>
  );
};

export default Checkbox;
