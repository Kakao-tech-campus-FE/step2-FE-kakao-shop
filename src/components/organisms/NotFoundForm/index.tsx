import Button from "@components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const NotFoundForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <h4>
          죄송합니다.
          <br />
          요청하신 페이지를 찾을 수 없습니다.
        </h4>
        <p>
          방문하시려는 페이지의 주소가 잘못 입력되었거나,
          <br />
          페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <p>입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
        <p>
          관련 문의사항은 <strong>카카오 고객센터</strong>에 알려주시면 친절하게
          안내해 드리겠습니다.
        </p>
        <p>감사합니다.</p>
        <ButtonWrapper>
          <Button
            width={"100px"}
            height={"40px"}
            background={"#fee500"}
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default NotFoundForm;

const Container = styled.div`
  width: 620px;
  margin: 40px auto 42px;
`;

const Wrapper = styled.div`
  width: 500px;
  padding: 55px 60px 50px;
  line-height: 1.6;

  h4 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin-top: 24px;
    font-size: 14px;
  }
  strong {
    color: #fee500;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 80px;
`;
