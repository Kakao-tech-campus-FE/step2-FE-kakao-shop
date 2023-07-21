import { useState } from "react";
import OptionList from "../atoms/OptionList";
import Counter from "../atoms/Counter";
import Button from "../atoms/Button";
import { useMutation } from "react-query";
import { addCart } from "../../services/cart";
import { comma } from "../../utils/convert";
import { useSelector } from "react-redux";

const OptionColumn = ({ product }) => {
  const token = useSelector((state) => state.user.token);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      optionId: 0,
      quantity: 0,
      name: "",
      price: 0,
    },
  ]);
  const handleOnClickOption = (option) => {
    // 동일한 옵션 클릭 방지
    const isOptionSelected = selectedOptions.find(
      (el) => el.optionId === option.id
    );
    if (isOptionSelected) {
      console.log("이미 등록된 상품");
      return;
    }

    setSelectedOptions((prev) => {
      return [
        ...prev,
        {
          optionId: option.id,
          quantity: 1,
          price: option.price,
          name: option.optionName,
        },
      ];
    });
  };

  const handleOnChange = (count, index) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === index) {
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
  // react-query 사용(post 방식)
  // useMutaion 사용(상태를 변경)
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column rounded divide-y divide-slate-300 ...">
      <h3>옵션 선택</h3>
      {/* 옵션 담기 - optionId, quantity */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      {/* 담긴 옵션 표기 */}
      {selectedOptions.map(
        (option) =>
          option.optionId !== 0 && (
            <ul
              key={option.optionId}
              className="selected-option-list border-slate-300 my-3"
            >
              <li className="selected-option">
                <span className="name">선택한 상품 : {option.name}</span>
                <span className="price">{comma(option.price)}원</span>
                <Counter
                  onIncrease={(count) => {
                    handleOnChange(count, option.optionId);
                  }}
                  onDecrease={(count) => {
                    handleOnChange(count, option.optionId);
                  }}
                />
              </li>
            </ul>
          )
      )}
      <div className="total-quantity-price grid gap-2">
        <span>
          총 수량 :{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개{" "}
        </span>
        <span>
          총 주문금액 :{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
        </span>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          className="w-80 h-10 rounded bg-yellow-300 text-sm"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                console.log("OptionColumn/Token: ", token);
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
                  token: token,
                };
              }),
              {
                // 정상 요청
                onSuccess: () => {
                  if (selectedOptions.length === 1) {
                    alert("장바구니가 비었습니다.");
                  } else {
                    alert("장바구니에 담겼습니다.");
                  }
                },
                // 에러 요청
                onError: () => {
                  alert("장바구니 담기에 실패했습니다.");
                },
              }
            );
          }}
        >
          장바구니 담기
        </Button>
        <Button className="w-80 h-10 rounded bg-black text-sm text-white">
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default OptionColumn;
