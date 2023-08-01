import { styled } from "styled-components";
import Title from "../atoms/Title";
import ResultItem from "../atoms/ResultItem";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0 10px;
`;

const ResultContainer = styled.div`
  width: 700px;
  height: 120px;
  margin: 10px auto 0;
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
`;

const PriceRow = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  width: 150px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  & > span {
    color: #4683e9;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe342;
  border: transparent;
  border-top: 1px solid #eee;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:active {
    background-color: #fff;
  }
`;

const ResultList = ({ result }) => {
  const orderItems = result.data.response.products;
  const totalPrice = result.data.response.totalPrice;
  const navigate = useNavigate();

  return (
    <Container>
      <Title>주문상품 정보</Title>
      <div>
        {orderItems.map((item) => (
          <ResultItem key={item.productName} product={item} />
        ))}
        <ResultContainer>
          <PriceRow>
            <Price>일반 결제 금액</Price>
            <Price>
              <span>{totalPrice.toLocaleString()}원</span>
            </Price>
          </PriceRow>
          <StyledButton onClick={() => navigate("/")}>
            쇼핑 계속하기
          </StyledButton>
        </ResultContainer>
      </div>
    </Container>
  );
};

export default ResultList;
