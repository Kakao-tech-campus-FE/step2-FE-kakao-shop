import LinkButton from "../atoms/LinkButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";
import { useSelector } from "react-redux";
import { persistor } from "../../index";
import logo from "../../assets/pc_logo.png";
import { BsCart2, BsTruck } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const GnbOrganism = styled.div`
  overflow: hidden;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .img {
    display: inline-block;
  }

  .right-header {
    display: flex;
    align-items: center;
    width: 15rem;
  }

  .icons {
    display: flex;
    align-items: center;
    width: 8rem;
  }

  .icon {
    font-size: 1.6rem;
  }

  .login {
    margin-left: 2rem;
  }
`;
const staticServerUri = process.env.REACT_APP_PATH || "";

const Gnb = () => {
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);
  const isLoggedin = email === null ? false : true;

  const handleLoginButtonClick = () => {
    try {
      navigate(staticServerUri + routes.login);
    } catch (error) {
      console.log("로그인 실패:", error);
    }
  };

  const purge = async () => {
    await persistor.purge();
  };

  const handleLogoutButtonClick = () => {
    navigate(staticServerUri + routes.home);
    localStorage.removeItem("token");
  };

  return (
    <>
      <GnbOrganism>
        <div className="img">
          <img
            src={logo}
            alt="kakao-shoping"
            style={{ width: "100px", cursor: "pointer" }}
            onClick={() => navigate(staticServerUri + routes.home)}
          />
        </div>
        <div className="right-header">
          <div className="icons">
            <LinkButton className="icon">
              <IoIosSearch />
            </LinkButton>
            <LinkButton className="icon">
              <BsTruck />
            </LinkButton>
            <LinkButton
              className="cart icon"
              type="click"
              onClick={() => navigate(staticServerUri + routes.cart)}
            >
              <BsCart2 />
            </LinkButton>
          </div>
          {isLoggedin ? (
            <LinkButton
              className="login"
              type="click"
              onClick={async () => {
                await handleLogoutButtonClick();
                await setTimeout(() => purge(), 200);
              }}
            >
              로그아웃
            </LinkButton>
          ) : (
            <LinkButton
              className="login"
              type="click"
              onClick={handleLoginButtonClick}
            >
              로그인
            </LinkButton>
          )}
        </div>
      </GnbOrganism>
    </>
  );
};

export default Gnb;
