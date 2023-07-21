import React from 'react';

function TotalCount({ count }: { count: number }) {
  return <span>총 수량: {count}개</span>;
}

export default TotalCount;
