import Button from "../atoms/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";

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
const Gnb = () => {
  const navigate = useNavigate();
  return (
    <>
      <GnbOrganism>
        <Button
          className="home"
          type="click"
          onClick={() => navigate(routes.home)}
          styles={{
            width: "5rem",
            margin: "1rem",
            fontWeight: "bold",
          }}
        >
          쇼핑하기
        </Button>
        <Button
          className="login"
          type="click"
          onClick={() => navigate(routes.login)}
          styles={{
            width: "5rem",
            margin: "1rem",
          }}
        >
          로그인
        </Button>
      </GnbOrganism>
    </>
  );
};

export default Gnb;
