import OptionList from "../Atoms/OptionList";
import Counter from "../Atoms/Counter";
import { useState } from "react";
import { comma } from "../../Utils/convert";
import { useMutation } from "react-query";
import Button from "../Atoms/Button";
import { addCart } from "../../Servicies/cart";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);

    // 이미 선택된 옵션인 경우: alert / 수량을 증가시킴
    if (isOptionSelected) {
      // setSelectOptions((prev) =>
      //   prev.map((el) =>
      //     el.optionId === option.id
      //       ? {...el, quantity: el.quantity + 1 }
      //       : el
      //   )
      // );
      alert("이미 선택된 옵션입니다.");
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

  const handleOnChange = (count) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === option.id) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  // 장바구니 담기 api 처리
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList
        optioins={product.optioins}
        // 사용자가 선택한 option
        onClick={handleOnClickOption}
      />
      {/* 담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={`selected-option-key-${option.id}`} className="selected-option-list">
          <li className="selected-option">
            <Counter
              onIncrease={(count) => handleOnChange(count, option.id)}
              onDecrease={(count) => handleOnChange(count, option.id)}
            />
            <span className="name">{option.name}</span>
            <span className="price">{comma(option.price)}원</span>
          </li>
        </ol>
      ))}
      <hr />
      <div className="total-price">
        <span>
          총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity; // acc: 이전 값, cur: 햔재 선택된 element
            }, 0)
          )}
          개
        </span>
        <span>
          총 상품금액:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price; // acc: 이전 값, cur: 햔재 선택된 element
            }, 0)
          )}
          원
        </span>
      </div>
      <div className="button-group">
        <Button
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.id,
                  quantity: el.quantity,
                };
              }),
              {
                onSucess: () => {
                  alert("장바구니에 담겼습니다.");
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다.");
                },
              }
            );
          }}
        ></Button>
      </div>
    </div>
  );
};

export default OptionColumn;
