import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes.js";

const Styled = {
  Container: styled.div`
    width: 90px;
    height: 20px;
    cursor: pointer;
  `,
  Logo: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};

function LogoButton() {
  const navigate = useNavigate();
  return (
    <Styled.Container onClick={() => navigate(routes.home)}>
      <Styled.Logo
        src="https://st.kakaocdn.net/commerce_ui/front-talkstore/real/20230707/130532/assets/images/pc/pc_logo.png"
        alt="톡쇼핑하기"
      />
    </Styled.Container>
  );
}
export default LogoButton;
