import styled from "styled-components";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import isLoggedInAtom from "../../../storage/common/isLoggedIn.atom.js";
import routes from "../../../constants/routes.js";

const Styled = {
  Container: styled.div`
    width: 100vw;
    height: 4rem;
    position: fixed;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  AuthButton: styled.button``,
};

function GlobalNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const navigate = useNavigate();

  const onAuthButtonClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("accessTokenDate");
      setIsLoggedIn(false);
      return;
    }

    navigate(routes.signIn);
  };
  return (
    <Styled.Container>
      <button>other button</button>
      <Styled.AuthButton onClick={onAuthButtonClick}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </Styled.AuthButton>
    </Styled.Container>
  );
}

export default GlobalNavBar;
