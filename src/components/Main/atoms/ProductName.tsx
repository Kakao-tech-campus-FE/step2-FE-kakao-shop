import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

function ProductName({ children }: { children: ReactNode }) {
  return <Wrap>{children}</Wrap>;
}

export default ProductName;

const Wrap = styled.div`
  line-height: 18px;
  padding: 10px 0;
`;
