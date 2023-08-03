import React from 'react';

interface CheckAgreeProps {
  children: React.ReactNode;
  handler: React.Dispatch<React.SetStateAction<boolean>>;
  checkValue: boolean;
}
function CheckAgree({ children, handler, checkValue }: CheckAgreeProps) {
  return (
    <label htmlFor={children as string}>
      <input id={children as string} className="mr-1" type="checkbox" checked={checkValue} onChange={() => handler((prev) => !prev)} />
      <span className="text-gray-500 text-sm">{children}</span>
    </label>
  );
}

export default CheckAgree;
