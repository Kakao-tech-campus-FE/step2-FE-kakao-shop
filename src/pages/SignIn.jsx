import { useNavigate } from "react-router-dom";

import Form from "../components/organisms/form/Form.jsx";
import FORM_INFO from "../constants/FORM_INFO.js";
import FORM_DEFAULT from "../constants/FORM_DEFAULT.js";
import AuthTemplate from "../components/templates/auth-template/AuthTemplate.jsx";
import Button from "../components/atoms/button/Button.jsx";
import styled from "styled-components";
import routes from "../constants/routes.js";
import authAPI from "../api/authAPI.js";

const Styled = {
  SignUsBtnContainer: styled.div`
    display: flex;
    justify-content: right;
    align-items: center;

    .sign-us-btn {
      text-align: right;
      font-size: 0.85rem;
      color: ${({ theme }) => theme.color.black};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  `,
};
function SignIn() {
  const navigate = useNavigate();

  const onSignInSubmit = async (data) => {
    try {
      const { response } = await authAPI.signIn(data);
      localStorage.setItem("accessToken", response.token);
      localStorage.setItem("accessTokenDate", new Date().toString());
      navigate(routes.home);
    } catch (e) {
      alert(e.error.message);
    }
  };
  return (
    <AuthTemplate title="로그인">
      <Form
        style={{ width: "100%", maxWidth: "440px" }}
        defaultValues={FORM_DEFAULT.SIGN_IN}
        inputInformations={FORM_INFO.SIGN_IN}
        onError={(e) => console.log(e)}
        onSubmit={onSignInSubmit}
      >
        <Button
          type="submit"
          style={{ width: "100%", margin: "0.5rem 0 1rem" }}
        >
          로그인
        </Button>
        <Styled.SignUsBtnContainer>
          <span className="sign-us-btn" onClick={() => navigate(routes.signUp)}>
            회원가입
          </span>
        </Styled.SignUsBtnContainer>
      </Form>
    </AuthTemplate>
  );
}

export default SignIn;
