import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";
import logoKakao from "../../assets/logoKakao.png";
import cart from "../../assets/cart.png";

const LOGOUT_TIMER = 30 * 60 * 1000; // 30분 후 자동 로그아웃

const staticServerUri = process.env.REACT_APP_PATH || "";

function GNB() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);

  const [logoutTimer, setLogoutTimer] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      // 로그인된 상태일 경우 타이머 설정
      const timer = setTimeout(() => {
        dispatch(logout());
      }, LOGOUT_TIMER);

      setLogoutTimer(timer);
    } else {
      // 로그인된 상태가 아닐 경우 타이머 해제
      clearTimeout(logoutTimer);
    }

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [dispatch, isLoggedIn]);

  // 로그아웃 버튼 클릭시 실행
  const handleLogout = () => {
    clearTimeout(logoutTimer);
    dispatch(logout());
  };

  return (
    <Header>
      <Container>
        <Link to="/">
          <Logo src={logoKakao} alt="카카오 쇼핑하기 로고" />
        </Link>
        <Nav>
          <button
            onClick={() => {
              navigate(staticServerUri + "/search");
            }}
            className="text-black"
          >
            검색
          </button>
          <Link to="/cart">
            <img src={cart} alt="장바구니 버튼" className="h-10" />
          </Link>
          {!isLoggedIn ? (
            <StyledLink to={staticServerUri + "/login"}>로그인</StyledLink>
          ) : (
            <>
              <span>{email}</span>
              <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
            </>
          )}
          <StyledLink to={staticServerUri + "/signup"}>회원가입</StyledLink>
        </Nav>
      </Container>
    </Header>
  );
}

export default GNB;

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  padding: 0 2rem;
  height: 5rem;
  border-bottom: 0.1rem solid #ccc;
  background-color: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80rem;
  height: 4.95rem;
  margin: 0 auto;
`;

const Logo = styled.img`
  font-size: 2rem;
  width: 6rem;
  height: 2rem;
  margin: 1.3rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0 8rem;
  height: 5rem;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const StyledButton = styled.button`
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
