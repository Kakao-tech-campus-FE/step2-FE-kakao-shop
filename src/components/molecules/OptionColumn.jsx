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
    console.log(option);
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

  //장바구니 담기 api 처리
  // react-query를 사용해서 get 요청방법
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="flex flex-col top-50 basis-1/4">
      <h3 className="pb-2.5 float-left text-base leading-8">옵션 선택</h3>
      <div className="border border-gray-100">
        <OptionList options={product.options} onClick={handleOnClickOption} />
      </div>
      <hr />
      {/*담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list">
          <li className="selected-option mt-2.5 block bg-gray h-full">
            <span className="name text-sm">{option.name}</span>
            <div className="block text-sm pt-2.5">
              <Counter
                onIncrease={(count) => {
                  handleOnChange(count, option.optionId);
                }}
                onDecrease={(count) => {
                  handleOnChange(count, option.optionId);
                }}
              />
              <span className="float-right price">{comma(option.price)}원</span>
            </div>
          </li>
        </ol>
      ))}

      <div className="flex flex-row total-price py-5 text-lg">
        <span>
          총 수량 : {""}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity;
            }, 0)
          )}
          개
        </span>
        <span className="ml-auto font-bold text-rose-600">
          총 상품금액 :
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </span>
      </div>

      <Button
        className="h-14 bg-yellow w-full text-white"
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
        장바구니에 담기
      </Button>
    </div>
  );
};

export default OptionColumn;
