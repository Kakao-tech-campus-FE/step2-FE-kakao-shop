import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../constants/colors';

export default function LinkBtn({ children, to }: { children: ReactNode; to: string }) {
  return (
    <Wrap type="button">
      <StyleResetLink to={to}>{children}</StyleResetLink>
    </Wrap>
  );
}
const Wrap = styled.button`
  border: none;
  background-color: inherit;
`;

const StyleResetLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
`;
