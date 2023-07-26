import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
`;

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <StyledUl>
      <Link to="/cart">
        <img src="../../../assets/cart.png" alt="장바구니" width={28} />
      </Link>
      {isLoggedIn ? (
        <li>
          <Link
            to="/"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
          >
            로그아웃
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/signin">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </>
      )}
    </StyledUl>
  );
};

export default Nav;
