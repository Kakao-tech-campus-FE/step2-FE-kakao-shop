import LinkButton from "../atoms/LinkButton";
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
        <LinkButton
          type="click"
          onClick={() => navigate(routes.register)}
          styles={{ fontWeight: "bold" }}
        >
          회원가입
        </LinkButton>
      </AnchorRegister>
    </>
  );
};

export default GoRegister;
