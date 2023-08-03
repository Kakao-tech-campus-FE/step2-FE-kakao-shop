import { useState, useMemo } from "react";
import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { addCart } from "../../services/addCart";
import Button from "../atoms/Button";
import "../atoms/OptionList.css";

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

  const totalquantity = useMemo(() => {
    return selectedOptions.reduce((acc, cur) => {
      return acc + cur.quantity;
    }, 0);
  }, [selectedOptions]);

  const totalprice = useMemo(() => {
    return comma(
      selectedOptions.reduce((acc, cur) => {
        return acc + cur.quantity * cur.price;
      }, 0)
    );
  }, [selectedOptions]);

  return (
    <div className="option-column p-6">
      <div className="option-box  max-h-[210px] min-w-[350px] overflow-y-scroll ">
        <h3 className="pb-6 text-xl font-bold">옵션 선택</h3>
        <div class="border p-2 mb-4 border-solid border-3">
          {/* 옵션 담기 할 수 있는 영역 */}
          <OptionList options={product.options} onClick={handleOnClickOption} />
        </div>

        {/* 담긴 옵션 표기  */}
        {selectedOptions.map((item) => (
          <ol
            key={`selected-${item.optionId}`}
            className="selected-option-list"
          >
            <li className="selected-option">
              <span className="name flex gap-2">{item.name}</span>
              <span className="price">{comma(item.price)}원</span>
              <Counter
                value={item.quantity}
                onIncrease={(count) => handleOnChange(count, item)}
                onDecrease={(count) => handleOnChange(count, item)}
              />
            </li>
          </ol>
        ))}
      </div>
      <div>
        <span className="flex mt-4">
          <p className="font-bold">배송방법</p>
          <p className="mx-4 text-gray-400">택배배송</p>
        </span>
        <span className="flex mt-2">
          <p className="font-bold">배송비</p>
          <p className="border mx-8 min-w-[200px] text-gray-400">무료 </p>
        </span>
      </div>
      <hr className="mt-2 mb-4"></hr>
      <div className="total-price mt-4 text-lg flex justify-between">
        <span>총 수량 {totalquantity}개</span>
        <span>
          총 주문금액
          <span className="text-red-500 font-bold">{totalprice}</span>원
        </span>
      </div>
      <div className="button-group">
        <Button
          onClick={() => {
            if (selectedOptions.length) {
              // 선택한 옵션들을 서버로 전송하여 장바구니에 담기
              mutate(
                selectedOptions.map((item) => ({
                  optionId: item.optionId,
                  quantity: item.quantity,
                }))
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
