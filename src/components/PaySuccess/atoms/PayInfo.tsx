import React from 'react';

function PayInfo({ title, content }: { title: string; content: string }) {
  return (
    <div className="p-2">
      <span className="mr-2 text-gray-500 font-medium text-sm">{title}</span>
      <span className="text-sm">{content}</span>
    </div>
  );
}

export default PayInfo;
