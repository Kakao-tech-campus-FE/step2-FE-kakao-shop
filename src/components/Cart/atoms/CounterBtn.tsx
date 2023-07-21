import React, { type ReactNode } from 'react';

interface CounterBtnProps {
  children: ReactNode;
  callback: () => void;
  disabled?: boolean;
}
function CounterBtn({ children, callback, disabled = false }: CounterBtnProps) {
  return (
    <button type="button" disabled={disabled} onClick={callback} className="text-xl flex-1">
      {children}
    </button>
  );
}

export default CounterBtn;
