import { useState } from "react";
import OptionList from "../atoms/OptionList";
import Button from "../atoms/Button";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { addCarts } from "../../services/cart";
import { BsCart2 } from "react-icons/bs";

const SelectedOrderedList = styled.ol`
  list-style: none;
  margin: 1rem;
  padding: 0.5rem;

  .counter {
    margin-top: 0.8rem;
  }
`;

const TotalPrice = styled.div`
  span:last-child {
    float: right;
    color: red;
  }

  padding: 1.1rem;
`;

const ButtonGroup = styled.div`
  text-align: center;
  > button {
    padding: 0 1rem;
    margin: 1rem;
  }

  > button:nth-child(2) {
    width: 12rem;
  }
`;

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    if (isOptionSelected) {
      setSelectedOptions((prev) => {
        return prev.map((el) =>
          el.optionId === option.id ? { ...el, quantity: el.quantity + 1 } : el
        );
      });
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        {
          optionId: option.id,
          quantity: 1,
          price: option.price,
          name: option.optionName,
        },
      ]);
    }
  };

  const handleOnChange = (count, optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: count,
          };
        } else {
          return el;
        }
      });
    });
  };

  const { mutate } = useMutation({
    mutationFn: addCarts,
    onSuccess: () => {
      alert("장바구니에 담겼습니다.");
    },
    onError: () => {
      alert("장바구니 담기에 실패했습니다.");
    },
  });

  const addCart = () => {
    if (selectedOptions.length === 0) alert("옵션을 선택해주세요.");
    else {
      mutate(
        selectedOptions.map((el) => ({
          optionId: el.optionId,
          quantity: el.quantity,
        }))
      );
    }
  };

  return (
    <>
      <div className="border-l-2 mr-5" />
      <div className="option-column">
        <h3 className="font-bold mb-6">옵션 선택</h3>
        <OptionList options={product.options} onClick={handleOnClickOption} />
        {selectedOptions.map((option) => (
          <>
            <SelectedOrderedList
              key={`${option.optionId}`}
              className="selected-option-list"
            >
              <li className="selected-option">
                <span className="name">선택한 상품: {option.name}</span>
                <div className="counter">
                  <Counter
                    value={option.quantity}
                    onIncrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                    onDecrease={(count) =>
                      handleOnChange(count, option.optionId)
                    }
                  />
                </div>
              </li>
            </SelectedOrderedList>
            <hr />
          </>
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
          <Button color="white" backgroundColor="black" onClick={addCart}>
            <BsCart2 />
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
