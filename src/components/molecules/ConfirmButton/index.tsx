import Button from "@components/atoms/Button";
import { styled } from "styled-components";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ConfirmButton = ({ onClick }: Props) => {
  return (
    <Wrapper>
      <Button height={"50px"} background={"#fee500"} onClick={onClick}>
        로그인
      </Button>
      <OrText>
        <span>또는</span>
      </OrText>
      <Button height={"50px"} background={"#ebebeb"}>
        QR코드 로그인
      </Button>
    </Wrapper>
  );
};

export default ConfirmButton;

const Wrapper = styled.div`
  padding-top: 40px;
`;

const OrText = styled.div`
  padding: 15px 0;
  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: calc(50% - 20px);
    height: 1px;
    margin: 8px 0;
    background-color: rgba(0, 0, 0, 0.06);
    vertical-align: top;
  }
  span {
    display: inline-block;
    width: 40px;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #828282;
  }
`;
