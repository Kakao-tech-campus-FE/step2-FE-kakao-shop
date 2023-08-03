import styled from "styled-components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import accessTokenAtom from "@/storage/common/accessToken.atom.js";
import routes from "@/constants/routes.js";
import LogoButton from "@/components/atoms/logo-button/LogoButton.jsx";
import CartIcon from "@/assets/CartIcon.jsx";

const Styled = {
  Container: styled.nav`
    position: ${({ $isStorybookMode }) => $isStorybookMode || "fixed"};

    width: 100%;
    height: 4rem;
    padding: 0 calc((100vw - 80rem) / 2);

    @media screen and (max-width: 84rem) {
      padding: 0 2rem;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: ${({ theme }) => theme.border.default};
    background-color: white;
    z-index: 10;
  `,
  ButtonBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  CartButton: styled.button`
    margin-right: 1rem;
    padding: 0.25rem;
    background-color: white;
  `,
  AuthButton: styled.button`
    padding: 0.4rem 0 0.4rem 1.25rem;
    background-color: white;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.black};
    border-left: 1px solid #757575;
  `,
};

function GlobalNavBar({ isStorybookMode }) {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const navigate = useNavigate();

  const handleAuthButtonClick = () => {
    if (accessToken) {
      setAccessToken("");
      localStorage.removeItem("accessTokenDate");
      return;
    }
    navigate(routes.signIn);
  };

  const handleCartButtonClick = () => {
    navigate(routes.cart);
  };

  return (
    <Styled.Container $isStorybookMode={isStorybookMode}>
      <LogoButton
        onClick={() => {
          navigate(routes.home);
        }}
      />
      <Styled.ButtonBox>
        {accessToken && (
          <Styled.CartButton onClick={handleCartButtonClick}>
            <CartIcon />
          </Styled.CartButton>
        )}

        <Styled.AuthButton onClick={handleAuthButtonClick}>
          {accessToken ? "로그아웃" : "로그인"}
        </Styled.AuthButton>
      </Styled.ButtonBox>
    </Styled.Container>
  );
}

GlobalNavBar.propTypes = {
  isStorybookMode: PropTypes.bool,
};

GlobalNavBar.defaultProps = {
  isStorybookMode: false,
};

export default GlobalNavBar;
