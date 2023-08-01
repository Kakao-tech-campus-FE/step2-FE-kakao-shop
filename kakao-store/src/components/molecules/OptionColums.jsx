import OptionList from "../atoms/OptionList.jsx";
import Counter from "../atoms/Counter.jsx";
import Button from "../atoms/Button.jsx";
import { comma } from "../../utils/convert";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addCart } from "../../services/cart";
import { Card } from "react-bootstrap";

/**
 * 옵션 선택 컬럼
 *
 * @param {object} product 상품 정보
 * @returns {JSX.Element} 옵션 선택 컬럼
 */

const OptionColums = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]); // [option, option, ...
  const [count, setCount] = useState(0);

  const handleOnclickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.Id === option.id);

    if (isOptionSelected) {
      setSelectedOptions((prev) =>
        prev.map((el) =>
          el.Id === option.id ? { ...el, quantity: el.quantity + 1 } : el
        )
      );
      setCount((prev) => prev + 1); // Counter의 value 값 증가
    } else {
      setSelectedOptions((prev) => [
        ...prev,
        {
          Id: option.id,
          quantity: 1,
          price: option.price,
          name: option.optionName,
          optionquantity: option.quantity,
        },
      ]);
      setCount((prev) => prev + 1); // Counter의 value 값 증가
    }
  };

  const handleOnIncrease = (count, optionId) => {
    setSelectedOptions((prev) =>
      prev.map((el) =>
        el.Id === optionId ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };

  const handleOnDecrease = (count, optionId) => {
    setSelectedOptions((prev) =>
      prev.map((el) =>
        el.Id === optionId ? { ...el, quantity: el.quantity - 1 } : el
      )
    );
  };

  const handleOnClickDelete = (option) => {
    setSelectedOptions((prev) => prev.filter((el) => el.Id !== option.Id));
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
  });
  return (
    <div className="option-columns block justify-evenly">
      <h3 className="text mb-2 text-base font-bold">옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList
        options={product.options}
        // 사용자가 선택한 option
        onClick={
          handleOnclickOption
          // 장바구니 담기 api
          // optionId, quantity
        }
      />
      <hr className="py-2" />
      {/* 담긴옵션이 표기 */}
      {/* ui에서 옵션이름, 옵션 가격 */}
      {selectedOptions.map((option) => (
        <Card className="cart mb-3 rounded  border-solid bg-gray-50 p-2">
          <ol key={option.id} className="seleted-option-list m-1">
            <div className="my-2">
              <span className="name">{option.name}</span>
              <span
                className="delete float-right mx-1 font-thin"
                onClick={() => handleOnClickDelete(option)}
              >
                X
              </span>
            </div>
            <div className="flex">
              <Counter
                value={option.quantity}
                onIncrease={(count) => handleOnIncrease(count, option.Id)}
                onDecrease={(count) => handleOnDecrease(count, option.Id)}
              />

              {/* option 삭제 버튼 */}

              <span className="price flex-1 text-right">
                {comma(option.price)}원
              </span>
            </div>
          </ol>
        </Card>
      ))}

      <hr />
      <div className="total-price my-3 ">
        <span className="text-lg">
          총 수량:{" "}
          {/* reduce 함수는 배열을 순회하면서 하나의 값으로 만들어준다.
          배열의 합산에 가장 많이 사용 */}
          {selectedOptions.reduce((acc, cur) => {
            // acc: 이전 값
            // cur: 현재 선택된 엘리먼트
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span className="float-right text-xl">
          총 주문금액:{" "}
          <span className="font-bold text-kakao_red">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                // acc: 이전 값
                // cur: 현재 선택된 엘리먼트
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>
        </span>
      </div>
      <div className="button-group flex">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                console.log(el.Id, el.quantity);
                return {
                  optionId: el.Id,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 담겼습니다.");
                },
                onError: () => {
                  alert("장바구니에 담기 실패했습니다.");
                },
              }
            );
          }}
          className={
            "mx-2 my-8 w-full rounded bg-yellow-300 px-4 py-3 font-semibold hover:bg-yellow-400"
          }
        >
          장바구니 담기
        </Button>
        <Button
          className={
            "mx-2  my-8 w-full rounded bg-[#333333] px-4 py-3 font-semibold text-white hover:bg-[#292929]"
          }
        >
          바로 구매
        </Button>
        {/* 톡딜가 X */}
      </div>
    </div>
  );
};

export default OptionColums;
