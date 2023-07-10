// src/pages/Navigation.jsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  background-color: smokewhite;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #ff0000;
  }
`;

const LogoutLink = styled.button`
  background-color: transparent;
  font-size: 15px;
  border: none;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
  padding: 0;
  &:hover {
    color: #ff0000;
  }
`;

const Navigation = ({ isLoggedIn, handleLogout }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink to="/">홈</NavLink>
        </Li>
        {!isLoggedIn ? (
          <>
            <Li>
              <NavLink to="/login">로그인</NavLink>
            </Li>
            <Li>
              <NavLink to="/signup">회원가입</NavLink>
            </Li>
          </>
        ) : (
          <Li>
            <LogoutLink onClick={handleLogout}>로그아웃</LogoutLink>
          </Li>
        )}
      </Ul>
    </Nav>
  );
};

export default Navigation;