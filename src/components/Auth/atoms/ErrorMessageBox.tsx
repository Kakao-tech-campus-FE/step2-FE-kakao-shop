import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';

function ErrorMessageBox({ children }: { children: ReactNode }) {
  return <Wrap>{children}</Wrap>;
}

export default ErrorMessageBox;

const Wrap = styled.div`
  background-color: ${colors.gray};
  border-radius: 4px;
  color: ${colors.red};
  text-align: center;
  padding: 10px;
`;
