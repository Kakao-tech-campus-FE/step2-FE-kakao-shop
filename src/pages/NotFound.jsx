import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import routes from "@/constants/routes.js";
import PropTypes from "prop-types";

const Styled = {
  Container: styled.div`
    width: 100%;
    padding: 4rem;

    h1 {
      font-size: 2rem;
      font-weight: 600;
    }

    h4 {
      margin-top: 1rem;
      font-size: 1.2rem;
    }
  `,
  ButtonBox: styled.div`
    margin-top: 1rem;

    button {
      background-color: white;
      color: ${({ theme }) => theme.color.highlight};
    }
    .home {
      margin-right: 1rem;
    }
  `,
};

function NotFound({ title, description }) {
  const navigate = useNavigate();
  return (
    <GlobalTemplate title={title || "404 Not Found"}>
      <Styled.Container>
        <h1>{title || "Not Found"}</h1>
        <h4>{description || "해당 페이지를 찾을 수 없습니다"}</h4>

        <Styled.ButtonBox>
          <button
            className="home"
            onClick={() => {
              navigate(routes.home);
            }}
          >
            홈
          </button>
          <button className="back" onClick={() => navigate(-1)}>
            뒤로 가기
          </button>
        </Styled.ButtonBox>
      </Styled.Container>
    </GlobalTemplate>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default NotFound;
