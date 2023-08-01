import { styled } from "styled-components";
import { Card, Collapse, Divider } from "antd";
import Button from "./Button";
import { useState } from "react";
import Counter from "./Counter";
import { useMutation } from "react-query";
import { addCart } from "../../services/apis";

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  height: inherit;
  display: flex;
  flex-direction: column;
`;

const SelectContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;
const SelectRow = styled.div`
  height: 30px;
  font-size: 18px;
  font-weight: 500;
`;
const StyledButton = styled.button`
  display: block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const SelectResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { mutate } = useMutation(addCart, {
    onSuccess: () => {
      alert("장바구니에 상품이 담겼습니다.");
      setSelectedOptions([]);
    },
    onError: (error) => {
      // 비회원이 장바구니에 상품을 담으려고 할 때, alert로 로그인 유도
      if (error.response.status === 401) {
        alert("로그인이 필요합니다.");
      }
      // 백엔드 API 수정으로 발생하지 않을 에러
      // if (error.response.status === 500) {
      //   alert("장바구니에 담긴 상품입니다.");
      // }
    },
  });

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.find(
      (item) => item.optionId === option.id
    );

    if (isSelected) {
      alert("선택한 옵션입니다.");
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        {
          optionId: option.id,
          quantity: 1,
          name: option.optionName,
          price: option.price,
        },
      ]);
    }
  };

  const handleOptionDelete = (item) => {
    const newOptions = selectedOptions.filter(
      (option) => option.optionId !== item.optionId
    );
    setSelectedOptions(newOptions);
  };

  const items = [
    {
      key: "1",
      label: "선택",
      children: options.map((option, index) => (
        <div
          key={option.id}
          onClick={() => handleOptionClick(option)}
          style={{ cursor: "pointer" }}
        >
          <p>{option.optionName}</p>
          <p>{option.price.toLocaleString()}원</p>
          {index === options.length - 1 ? null : <Divider />}
        </div>
      )),
    },
  ];

  const handleOnChange = (count, item) => {
    setSelectedOptions((prev) =>
      prev.map((el) => {
        if (el.optionId === item.optionId) {
          if (item.quantity > 0) {
            return { ...el, quantity: count };
          }
        }
        return el;
      })
    );
  };

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
        {selectedOptions.map((item) => (
          <Card
            key={item.optionId}
            type="inner"
            title={item.name}
            extra={
              <StyledButton onClick={() => handleOptionDelete(item)}>
                삭제
              </StyledButton>
            }
            style={{ marginTop: "10px" }}
          >
            <SelectResultRow>
              <Counter
                value={item.quantity}
                onClickIncrease={(count) => handleOnChange(count, item)}
                onClickDecrease={(count) => handleOnChange(count, item)}
              />
              <div>{(item.quantity * item.price).toLocaleString()}원</div>
            </SelectResultRow>
          </Card>
        ))}
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
          <ItemCount>
            총 수량&nbsp;
            {selectedOptions
              .reduce((acc, cur) => acc + cur.quantity, 0)
              .toLocaleString()}
            개
          </ItemCount>
          <ItemPrice>
            총 주문금액&nbsp;
            <span>
              {selectedOptions
                .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
                .toLocaleString()}
            </span>
            &nbsp;원
          </ItemPrice>
        </ItemContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              if (selectedOptions.length) {
                mutate(
                  selectedOptions.map((item) => {
                    return {
                      optionId: item.optionId,
                      quantity: item.quantity,
                    };
                  })
                );
              } else {
                alert("옵션을 먼저 선택해주세요.");
              }
            }}
            bgColor="black"
            textColor="white"
          >
            장바구니 담기
          </Button>
          <Button
            bgColor="#ffe342"
            textColor="black"
            onClick={() => alert("미구현 기능입니다.")}
          >
            바로 구매
          </Button>
        </ButtonContainer>
      </ResultContainer>
    </Container>
  );
};

export default ProductOption;
