import styled from "styled-components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import accessTokenAtom from "@/storage/common/accessToken.atom.js";
import routes from "@/constants/routes.js";
import LogoButton from "@/components/atoms/logo-button/LogoButton.jsx";

const Styled = {
  Container: styled.nav`
    position: ${({ isStorybookMode }) => isStorybookMode || "fixed"};

    min-width: 80rem;
    height: 4rem;
    padding: 0 calc((100vw - 80rem) / 2);
    box-sizing: content-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #ebebeb;
    background-color: white;
    z-index: 10;
  `,
  ButtonBox: styled.div``,
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

  const onAuthButtonClick = () => {
    if (accessToken) {
      setAccessToken("");
      localStorage.removeItem("accessTokenDate");
      return;
    }
    navigate(routes.signIn);
  };

  return (
    <Styled.Container isStorybookMode={isStorybookMode}>
      <LogoButton
        onClick={() => {
          navigate(routes.home);
        }}
      />
      <Styled.ButtonBox>
        <Styled.AuthButton onClick={onAuthButtonClick}>
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
