import Button from "../atoms/Button";
import styled from "styled-components";

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
  return (
    <>
      <GnbOrganism>
        <Button
          className="home"
          type="click"
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
