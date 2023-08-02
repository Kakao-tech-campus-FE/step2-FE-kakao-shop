import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const OrderContainer = ({ children }: Props) => {
  return (
    <Container>
      <Header>
        <p>주문하기</p>
      </Header>
      {children}
    </Container>
  );
};

export default OrderContainer;

const Container = styled.div`
  margin: 100px auto 50px;
  width: 870px;
`;

const Header = styled.div`
  height: 44px;
  border-top: 1px solid #ebebeb;
  background-color: #fff;
  text-align: center;

  & > p {
    margin-top: 11px;
    font-weight: 700;
    font-size: 15px;
    line-height: 21px;
  }
`;
