import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { addCart } from "../../services/cart";
import { useMutation } from "react-query";
import Button from "../atoms/Button";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일한 옵션을 클릭할 수도 있으므로 방지해주는 코드를 여기에 넣는다.
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

    // 이미 선택된 옵션이면 증가 없이 처리
    if (isOptionSelected) {
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

  // 나중에 영상보여 수정 필수
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

  // 장바구니 담기 API 처리
  // 장바구니 담기 기능 구현 위해 post 메소드 사용
  // useMutation 사용
  // mutation = 변이라는 뜻
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      <div className="total-price">
        <span>총 상품금액</span>
      </div>
      {/* 담긴 옵션이 표시 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list">
          {/* 수량 변경 기능 */}
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
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span>
          총 상품금액: 총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                console.log(el);
                return {
                  // payload가 불필요하게 많으므로 필요한 내용만 골라서 호출
                  optionId: el.optionId,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다.");
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다.");
                },
              }
            );
          }}
        >
          장바구니 담기
        </Button>
        {/* 톡딜가 구매: 개발은 X */}
      </div>
    </div>
  );
};

export default OptionColumn;
