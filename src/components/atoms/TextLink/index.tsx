import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
  // link url을 나타내는 to
  to: string;
  children?: React.ReactNode;
}

const TextLink = ({ to, children }: Props) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default TextLink;

const StyledLink = styled(Link)`
  color: #191919;
  font-size: 12px;
`;
