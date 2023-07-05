import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export default function LinkBtn({ content, to }: { content: string; to: string }) {
  return (
    <Wrap type="button">
      <StyledLink to={to}>{content}</StyledLink>
    </Wrap>
  );
}
const Wrap = styled.button`
  border: none;
  background-color: black;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
