import { useState } from "react";
import OptionList from "../atoms/OptionList";
import Button from "../atoms/Button";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import styled from "styled-components";
import { useMutation } from "react-query";
import { addCarts } from "../../services/cart";

const SelectedOrderedList = styled.ol`
  list-style: none;
  padding: 0;
`;

const TotalPrice = styled.div`
  span:last-child {
    float: right;
  }
`;

const ButtonGroup = styled.div`
  text-align: center;
  > button {
    margin: 1rem;
  }
`;

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일한 옵션 코드를 방지해주는 코드
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id // 찾았을 때 해당 엘리먼트 반환 없으면 undefined
    );
    // 이미 선택된 옵션이면
    if (isOptionSelected) {
      setSelectedOptions((prev) => {
        prev.map(
          (el) =>
            el.optionId === option.id
              ? { ...el, quantity: el.quantity + 1 }
              : el // 일치하는 것만 +1 한다.
        );
      });
      return;
    }

    setSelectedOptions((prev) => [
      ...prev,
      {
        optionId: option.id,
        quantity: 1,
        price: option.price,
        name: option.optionName,
      },
    ]);
  };

  const handleOnChange = (count, optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  const { mutate } = useMutation({
    mutationFn: addCarts,
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    onSuccess: () => {
      alert("장바구니에 담겼습니다.");
    },
    onError: () => {
      alert("장바구니 담기에 실패했습니다.");
    },
  });

  return (
    <>
      <div className="option-column">
        <h3>옵션 선택</h3>
        <OptionList options={product.options} onClick={handleOnClickOption} />
        <hr />
        {selectedOptions.map((option) => (
          <SelectedOrderedList
            key={`selected-option-key${option.id}`}
            className="selected-option-list"
          >
            <li className="selected-option">
              <span className="name">선택한 상품: {option.name}</span>
              <Counter
                // value={option.quantity}
                onDecrease={(count) => handleOnChange(count, option.id)}
                onIncrease={(count) => handleOnChange(count, option.id)}
              />
            </li>
            <hr />
          </SelectedOrderedList>
        ))}

        <TotalPrice className="total-price">
          <span>
            총 수량:{" "}
            {selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)}
            개
          </span>
          <span>
            총 주문금액:&nbsp;
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
            원
          </span>
        </TotalPrice>
        <ButtonGroup className="button-group">
          <Button
            color="white"
            backgroundColor="black"
            onClick={() => {
              mutate(
                selectedOptions.map((el) => ({
                  optionId: el.optionId,
                  quantity: el.quantity,
                }))
              );
            }}
          >
            장바구니 담기
          </Button>
          <Button width="10rem" backgroundColor="yellow">
            톡딜가로 구매하기
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default OptionColumn;
