import LinkButton from "../atoms/LinkButton";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";
import { useDispatch, useSelector } from "react-redux";

const GnbOrganism = styled.div`
  overflow: hidden;
  padding: 2rem 5rem;

  .home {
    float: left;
  }

  .login {
    float: right;
  }
`;

const Gnb = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const handleLogout = () => {
    state === false
      ? navigate(routes.login)
      : dispatch({ type: "changeState" }) &&
        window.localStorage.removeItem("userInfo") &&
        window.location.replace("/");
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
        <LinkButton
          className="login"
          type="click"
          onClick={handleLogout}
          styles={{
            width: "5rem",
            margin: "1rem",
          }}
        >
          {children}
        </LinkButton>
      </GnbOrganism>
    </>
  );
};

export default Gnb;
