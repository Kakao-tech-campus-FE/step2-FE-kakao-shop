import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

function ProductPrice({ children }: { children: ReactNode }) {
  return <Wrap>{children}</Wrap>;
}

export default ProductPrice;

const Wrap = styled.div`
  font-size: 18px;
`;
