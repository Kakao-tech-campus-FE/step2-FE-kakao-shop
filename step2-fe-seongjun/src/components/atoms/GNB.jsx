import { Link } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginTime, setEmail, logout } from "../../store/slices/userSlice";
import styled from "styled-components";

function GNB() {
  const token = useSelector((state) => state.user.token);;
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setEmail(null)); 
    alert("정상적으로 로그아웃되었습니다.");
  };

  const timeout = useCallback(() => {
    const time = 10 * 1000; // test를 위해 10초로 설정해두었습니다.
    const currentTime = new Date().getTime();
    const lastTime = localStorage.getItem("loginTime");
    if(lastTime && currentTime - parseInt(lastTime) >= time) {
      dispatch(logout());
    }
  }, [dispatch]); 
  
  useEffect(() => {
    dispatch(loginTime());
    const Timer = setInterval(() => {
      timeout();
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, [dispatch, timeout]);


  return (
    <Header>
      <Container>
        <Link to="/" className="root_page" style={{paddingTop: 31}}>
          <img src={"/logoKakao.png"} alt="logoKakao.png" height={30}/>
        </Link>
        <Nav>
              {/* 장바구니 버튼 */}
              <Link to="/cart">
                <img src={"/cart.png"} alt="cart.png" height={30}/>
              </Link>
            <span className="divison">|</span>
              {/* 로그인 버튼 */}
              {token ? (
                <StyledLink
                  to="/login"
                  onClick={handleLogout}
                  style={{textDecoration: "none", color: "black"}}
                >
                  {" "}
                  로그아웃{" "}
                </StyledLink>
              ) : (
                <Link
                  to="/login"
                  style={{textDecoration: "none", color: "black"}}
                >
                  {" "}
                  로그인{" "}
                </Link>
              )}
        </Nav>
      </Container>
    </Header>
  )
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
  width: 5rem;
  height: 2.25rem;
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