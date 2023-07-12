import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  display: block;
  padding: 60px 20px 40px;
`;

const Card = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Card;
