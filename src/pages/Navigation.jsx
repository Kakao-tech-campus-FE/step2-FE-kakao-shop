import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setEmail, setLoginTime } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

import homeImage from "../assets/logoKakao.png";
import cartImage from "../assets/cart.png";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  background-color: smokewhite;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  align-items: left;
  margin-right: 80%; 
  text-decoration: none;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #ff0000;
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
    justify-content: center;
  }
`;

const Li = styled.li`
  margin: 0 10px;
  
  @media (max-width: 768px) {
    margin: 0 5px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  &:hover {
    color: #ff0000;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
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
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Navigation = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const checkLogoutTime = () => {
    const logoutTime = 1 * 60 * 60 * 24 * 1000;
    const currentTime = new Date().getTime();
    const storedLoginTime = localStorage.getItem("loginTime");
    if (!storedLoginTime) {
      // storedLoginTime 값이 없는 경우에 대한 처리
      console.log("storedLoginTime 값이 없습니다.");
    } else if (currentTime - parseInt(storedLoginTime) >= logoutTime) {
      dispatch(logoutUser());
    }
  };

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(setEmail({ email }));
    }
  }, [dispatch, isAuthenticated, navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
    checkLogoutTime();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  return (
    <Nav>
      <Ul>
        <HomeLink to="/" style={{  }}>
          <img src={homeImage} alt="Home" style={{ width: "80px", height: "30px" }} />
        </HomeLink>
        {!isAuthenticated ? (
          <>
            <Li>
              <NavLink to="/login">로그인</NavLink>
            </Li>
            <Li>
              <NavLink to="/signup">회원가입</NavLink>
            </Li>
          </>
        ) : (
          <>
            <Li>
              <NavLink to="/cart">
                <img src={cartImage} alt="Cart" style={{ width: "35px", height: "35px", marginBottom: "30px" }} />
              </NavLink>
            </Li>
            <Li>
              <LogoutLink onClick={handleLogout}>로그아웃</LogoutLink>
            </Li>
          </>
        )}
      </Ul>
    </Nav>
  );
};

export default Navigation;