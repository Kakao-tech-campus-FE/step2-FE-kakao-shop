import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { useMutation } from "react-query";
import Counter from "../atoms/Counter";
import { addCart } from "../../services/cart";
import { comma } from "../../utils/convert";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

const OptionColumn = ({ product }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );

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

  //장바구니 담기 api 처리
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3>옵션 선택</h3>
      <OptionList options={product.options} onClick={handleOnClickOption} />
      {/*담긴 옵션이 표기*/}
      {selectedOptions.map((option) => (
        <ol key={option.id} className="selected-option-list">
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
          총 수량:
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span>
          총 상품금액:
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.price * cur.quantity;
            }, 0)
          )}
          원
        </span>
      </div>

      <div className="button-group">
        {/*장바구니 담기 버튼 위치 */}
        <Button
          className="rounded-lg bg-black text-white"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.Id,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다.");
                  navigate("/cart");
                },
                onError: () => {
                  alert("장바구니에 담기 실패했습니다.");
                },
              }
            );
          }}
        >
          장바구니 담기
        </Button>
        <Button
          className="rounded-full bg-yellow-500 text-black"
          onClick={() => {}}
        >
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default OptionColumn;
