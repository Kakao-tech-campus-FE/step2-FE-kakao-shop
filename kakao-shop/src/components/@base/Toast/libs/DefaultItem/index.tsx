import styled from '@emotion/styled';
import type { FunctionComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  isShow: boolean;
}

export const DefaultToastItem: FunctionComponent<Props> = ({ children, isShow }) => (
  <Container style={{ opacity: isShow ? 1 : 0 }}>{children}</Container>
);

const Container = styled.div`
  display: flex;

  position: relative;

  width: 450px;
`;
