import { useState } from "react";
import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

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
      <hr />
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      {/* 담긴 옵션 표기  */}
      {selectedOptions.map((option) => (
        <ol
          key={`selected-${option.optionId}`}
          className="selected-option-list"
        >
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
      <div className="button-group">장바구니 담기</div>
    </div>
  );
};
export default OptionColumn;
