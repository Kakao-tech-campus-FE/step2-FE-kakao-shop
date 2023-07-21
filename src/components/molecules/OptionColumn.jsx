import { useState } from "react";
import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { addCart } from "../../services/addCart";
import Button from "../atoms/Button";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const { mutate } = useMutation(addCart, {
    onSuccess: () => {
      alert("장바구니에 정상적으로 담겼습니다.");
    },
    onError: (error) => {
      alert(`${error.message}`);
    },
  });

  const handleOnClickOption = (option) => {
    // 이미 선택 된 옵션인지 확인
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );
    // 수량증가
    if (isOptionSelected) {
      // setSelectedOptions((prev) =>
      //   prev.map((el) =>
      //     el.optionId === option.id ? { ...el, quantity: el.quantity + 1 } : el
      //   )
      // );
      return;
    }
    // 아니면 그냥 담기
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

  const handleOnChange = (count, item) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === item.optionId) {
          return {
            ...el,
            quantity: count,
          };
        }
        return el;
      });
    });
  };

  // const token = localStorage.getItem("token");
  // if (token) {
  //   console.log("true");
  //   // 토큰이 존재하는 경우
  //   // 원하는 동작을 수행하세요.
  // } else {
  //   console.log("false");
  //   // 토큰이 없는 경우
  //   // 원하는 동작을 수행하세요.
  // }

  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      {/* 옵션 담기 할 수 있는 영역 */}
      <OptionList
        options={product.options}
        // 사용자가 선택한 옵션
        onClick={handleOnClickOption}
        //장바구니 담기 api
      />

      {/* 담긴 옵션 표기  */}
      {selectedOptions.map((item) => (
        <ol key={`selected-${item.optionId}`} className="selected-option-list">
          <li className="selected-option">
            <Counter
              value={item.quantity}
              onIncrease={(count) => handleOnChange(count, item)}
              onDecrease={(count) => handleOnChange(count, item)}
            />
            <span className="name">{item.name}</span>
            <span className="price">{comma(item.price)}원</span>
          </li>
        </ol>
      ))}
      <hr />
      <div className="total-price">
        <span>
          총 수량 :{" "}
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span>
          총 상품금액 :{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>
      <div className="button-group">
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
              alert("옵션을 선택해주세요.");
            }
          }}
        >
          장바구니 담기
        </Button>
      </div>
    </div>
  );
};
export default OptionColumn;
