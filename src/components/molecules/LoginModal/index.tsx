import ModalContainer from "@components/atoms/ModalContainer";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const LoginModal = ({ onClick }: Props) => {
  const navigate = useNavigate();

  return (
    <ModalContainer>
      <Modal>
        <Contents>
          <p>로그인이 필요한 메뉴입니다.</p>
          <p>로그인 하시겠습니까?</p>
        </Contents>
        <ButtonWrapper>
          <button onClick={onClick}>취소</button>
          <button onClick={() => navigate("/login")}>확인</button>
        </ButtonWrapper>
      </Modal>
    </ModalContainer>
  );
};

export default LoginModal;

const Modal = styled.div`
  margin-top: -30px;
  width: 300px;
  height: 154px;
  background-color: #fff;
`;

const Contents = styled.div`
  padding: 36px 24px 26px;

  p {
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }
`;

const ButtonWrapper = styled.div`
  button {
    width: 150px;
    height: 52px;
    border: none;
    border-top: 1px solid #ededed;
    background-color: #fff;
    color: #333;
    font-size: 16px;
    cursor: pointer;
  }

  button:first-child {
    border-right: 1px solid #ededed;
  }
`;
