import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: black;
  }
  &:hover {
    color: #3a1d1d;
  }
`;

const Nav = () => {
  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to="/">홈</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/signin">로그인</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/signup">회원가입</StyledLink>
        </Li>
      </Ul>
    </nav>
  );
};

export default Nav;
