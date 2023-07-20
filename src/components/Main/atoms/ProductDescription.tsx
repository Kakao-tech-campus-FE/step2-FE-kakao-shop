import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

function ProductDescription({ children }: { children: ReactNode }) {
  return <Wrap>{children}</Wrap>;
}

export default ProductDescription;

const Wrap = styled.div`
  font-size: 14px;
`;
