import LinkButton from "../atoms/LinkButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";
import { useSelector } from "react-redux";
import { persistor } from "../../index";

const GnbOrganism = styled.div`
  overflow: hidden;
  padding: 2rem 5rem;

  .home {
    float: left;
  }

  .cart {
    float: right;
  }

  .login {
    float: right;
  }
`;

const Gnb = () => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const isLoggedin = email === null ? false : true;

  const handleLoginButtonClick = () => {
    try {
      navigate(routes.login);
    } catch (error) {
      console.log("로그인 실패:", error);
    }
  };

  const purge = async () => {
    await persistor.purge();
  };

  const handleLogoutButtonClick = () => {
    navigate(routes.home);
    localStorage.removeItem("token");
  };

  return (
    <>
      <GnbOrganism>
        <LinkButton
          className="home"
          type="click"
          onClick={() => navigate(routes.home)}
          styles={{
            margin: "1rem",
            fontWeight: "bold",
          }}
        >
          쇼핑하기
        </LinkButton>
        {isLoggedin ? (
          <LinkButton
            className="login"
            type="click"
            onClick={async () => {
              await handleLogoutButtonClick();
              await setTimeout(() => purge(), 200);
            }}
            styles={{
              width: "5rem",
              margin: "1rem",
            }}
          >
            로그아웃
          </LinkButton>
        ) : (
          <LinkButton
            className="login"
            type="click"
            onClick={handleLoginButtonClick}
            styles={{
              width: "5rem",
              margin: "1rem",
            }}
          >
            로그인
          </LinkButton>
        )}

        <LinkButton
          className="cart"
          type="click"
          onClick={() => navigate(routes.cart)}
          styles={{
            width: "5rem",
            margin: "1rem",
          }}
        >
          장바구니
        </LinkButton>
      </GnbOrganism>
    </>
  );
};

export default Gnb;
