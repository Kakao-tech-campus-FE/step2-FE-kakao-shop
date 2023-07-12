import React from 'react';
import styled from 'styled-components';
import Skeleton from '../atoms/Skeleton';

function SkeletonList({ count }: { count: number }) {
  const list = new Array(count).fill(0).map((_, index) => <Skeleton key={index} />);
  return <Wrap>{list}</Wrap>;
}

export default SkeletonList;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
