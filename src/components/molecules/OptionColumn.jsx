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
    <div className="option-column">
      <h3 className="font-bold text-lg my-2">옵션 선택</h3>
      {/* 옵션 담기 - optionId, quantity */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <hr />
      {/* 담긴 옵션 표기 */}
      {selectedOptions
        .filter((option) => option.optionId !== 0)
        .map((option) => (
          <ul
            key={option.optionId}
            className="selected-option-list border rounded my-2"
          >
            <li className="selected-option p-2 bg-gray-100">
              <div className="name font-bold text-lg">{option.name}</div>
              <div className="price text-right font-medium">
                {comma(option.price)}원
              </div>
              {/* Counter */}
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
        ))}
      <div className="total-quantity-price grid gap-2">
        <span className="font-semibold">
          총 수량{" "}
          <span className="font-bold">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity;
              }, 0)
            )}
            개{" "}
          </span>
        </span>
        <span className="font-semibold">
          총 주문금액{" "}
          <span className="font-bold text-red-500">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>
          원
        </span>
      </div>
      <div className="button-group">
        <Button
          className="w-80 h-10 rounded bg-black text-white font-semibold"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
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
        <Button className="w-80 h-10 rounded bg-yellow-300 font-semibold">
          구매하기
        </Button>
      </div>
    </div>
  );
};

export default OptionColumn;
