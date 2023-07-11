import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  border: 1px solid #939393;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  padding: 60px 20px 40px;
`;

const Card = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Card;
