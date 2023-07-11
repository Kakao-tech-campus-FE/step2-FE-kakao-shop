import Button from "../atoms/Button";
import Label from "../atoms/Label";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";

const AnchorRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoRegister = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnchorRegister>
        <Label>계정이 없으신가요?</Label>
        <Button
          type="click"
          onClick={() => navigate(routes.register)}
          styles={{ width: "5rem", fontWeight: "bold" }}
        >
          회원가입
        </Button>
      </AnchorRegister>
    </>
  );
};

export default GoRegister;
