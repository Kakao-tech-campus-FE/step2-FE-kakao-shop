import React, { ReactNode } from 'react';

function Title({ children }: { children: ReactNode }) {
  return <div className="font-semibold text-center border-gray-2 border-b p-4 text-sm">{children}</div>;
}

export default Title;
