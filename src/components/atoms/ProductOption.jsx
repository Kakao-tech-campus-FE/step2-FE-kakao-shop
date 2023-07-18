import { styled } from "styled-components";
import { Collapse, Divider } from "antd";
import Button from "./Button";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;
const SelectRow = styled.div`
  height: 30px;
  font-size: 18px;
  font-weight: 500;
`;

const ResultContainer = styled.div`
  height: 200px;
  margin-bottom: 20px;
`;

const FeeContainer = styled.div`
  height: 34%;
  margin: 10px 0;
`;
const FeeRow = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`;
const FeeTitle = styled.div`
  width: 80px;
  font-size: 16px;
  font-weight: 500;
`;
const FeeContent = styled.div`
  font-size: 14px;
`;

const ItemContainer = styled.div`
  height: 38%;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemCount = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const ItemPrice = styled.div`
  font-size: 20px;
  font-weight: 400;
  & > span {
    color: red;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  height: 28%;
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const ProductOption = ({ options }) => {
  const items = [
    {
      key: "1",
      label: "선택",
      children: options.map((option, index) => (
        <div key={option.id}>
          <p>{option.optionName}</p>
          <p>{option.price.toLocaleString()}원</p>
          {index === options.length - 1 ? null : <Divider />}
        </div>
      )),
    },
  ];

  console.log(options);
  return (
    <Container>
      <SelectContainer>
        <SelectRow>옵션 선택</SelectRow>
        <Collapse
          accordion
          size="large"
          expandIconPosition="end"
          defaultActiveKey={["1"]}
          items={items}
        />
      </SelectContainer>
      <ResultContainer>
        <FeeContainer>
          <FeeRow>
            <FeeTitle>배송방법</FeeTitle>
            <FeeContent>택배배송</FeeContent>
          </FeeRow>
          <FeeRow>
            <FeeTitle>배송비</FeeTitle>
            <FeeContent>무료</FeeContent>
          </FeeRow>
        </FeeContainer>
        <ItemContainer>
          <ItemCount>총 수량 0개</ItemCount>
          <ItemPrice>
            총 주문금액 <span>255,340</span> 원
          </ItemPrice>
        </ItemContainer>
        <ButtonContainer>
          <Button
            onClick={() => console.log("장바구니 클릭")}
            bgColor="black"
            textColor="white"
          >
            장바구니 담기
          </Button>
          <Button bgColor="#ffe342" textColor="black">
            바로 구매
          </Button>
        </ButtonContainer>
      </ResultContainer>
    </Container>
  );
};

export default ProductOption;
