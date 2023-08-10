import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { useMutation } from "react-query";
import Button from "../atoms/Button";
import { addCart } from "../../services/cart";

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 이미 선택된 옵션인지 확인
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

  const handleOnDelateChange = (count, optionId) => {
    setSelectedOptions((prev) => {
      return prev.map((el) => {
        if (el.optionId === optionId) {
          return {
            ...el,
            quantity: 0,
          };
        }
        return el;
      });
    });
  };

  // 장바구니 담기 api 처리
  // post method
  // matate를 실행시키면 addCart가 실행됨
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column text-center p-10 bg-gray-100">
      <h3 className="p-4 text-2xl">옵션 선택</h3>
      <hr className="py-4" /> {/* hr은 선, 구분선 */}
      {/* 옵션 담기를 할 수 있는 영역 */}
      <div className=" flex flex-col gap-2 mb-4">
        <OptionList
          options={product.options}
          // 사용자가 선택한 option
          onClick={handleOnClickOption}
        />{" "}
      </div>
      {/* 담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list ">
          <li className="selected-option mb-1">
            {/* 수량 변경 기능 */}
            <Counter
              onDecrease={(count) => handleOnChange(count, option.id)}
              onIncrease={(count) => handleOnChange(count, option.id)}
            />
            <div className="flex justify-between p-4">
              <span className="name text-xl">{option.name}</span>
              <span className="price text-xl">{comma(option.price)}</span>
              <button onClick={handleOnDelateChange}>X</button>
            </div>
          </li>
        </ol>
      ))}
      <hr /> {/* hr은 선, 구분선 */}
      <div className="total-price p-5">
        <span>
          총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              // acc: 이전 값
              // cur: 현재 선택된 엘리먼트
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span>
          총 상품금액:
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>
      {/* ui에서 필요한 정보: 옵션 이름, 옵션 가격, 옵션 수량, 옵션 총 가격 */}
      <div className="button-group p-4"></div>
      {/* 장바구니 담기 버튼 위치 */}
      <div className="flex justify-between p-4">
        <Button
          className="p-4 text-black font-bold text-l bg-yellow-400"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
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
          장바구니
        </Button>
        <Button className="p-4 text-black font-bold text-l bg-yellow-400">
          바로 구매
        </Button>
      </div>
    </div>
  );
};

export default OptionColumn;
