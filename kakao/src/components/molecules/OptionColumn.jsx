import { useState } from "react";
import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import Button from "../atoms/Button";
import { addCart } from "../../services/cart";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭 했을때 방지해줄 코드(이미 선택된 옵션인가?)
    // 사용자가 선택한 옵션과 기존옵션이 일치하는 것을 isOptionSelected에 담아주고
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );
    // 이미 선택된 옵션이면
    // 1. 그대로 증가없이 처리 if(isOptionSelected){ return;}
    // 2. 수량 증가
    if (isOptionSelected) {
      setSelectedOptions((prev) => {
        prev.map((el) =>
          el.optionId === option.id ? { ...el, quantity: el.quantity + 1 } : el
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

  //장바구니 담기 api 처리(react-query)
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3>옵션선택</h3>
      <OptionList
        options={product.options}
        //사용자가 선택한 옵션이 담긴다.
        onClick={handleOnClickOption}
      />

      {/* 담긴 옵션 표기 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list">
          <li className="selected-option-item">
            <span className="selected-option-name">{option.name}</span>
            <Counter
              onIncrease={(count) => handleOnChange(count, option.id)}
              onDecrease={(count) => handleOnChange(count, option.id)}
            />
            <span className="selected-option-price">
              {comma(option.price)}원
            </span>
          </li>
        </ol>
      ))}

      <div className="delivery-info">
        <div className="delivery-info-method">
          <h3>배송방법</h3>
          <p>택배배송</p>
        </div>
        <div className="delivery-info-deliveryprice">
          <h3>배송비</h3>
          <p>무료</p>
        </div>
      </div>

      {/* 구분선 */}
      <hr />
      <div className="total-price">
        <span>
          총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span>
          총 주문금액:
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>

      <div className="button-group">
        <button className="like-button">
          <span class="material-symbols-outlined">favorite</span>
        </button>
        <Button
          onClick={() => {
            mutate(
              // selectedOptions에서 필요한 데이터만 id와 수량만
              selectedOptions.map((el) => {
                return {
                  optionId: el.id,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다😊");
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다😥");
                },
              }
            );
          }}
          className="cart-button"
        >
          <span class="material-symbols-outlined">shopping_cart</span>
        </Button>
        <button className="order-button">구매하기</button>
      </div>
    </div>
  );
};

export default OptionColumn;
