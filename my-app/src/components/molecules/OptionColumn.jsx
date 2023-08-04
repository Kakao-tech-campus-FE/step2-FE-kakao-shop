import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { addCart } from "../../services/cart";
import { useMutation } from "@tanstack/react-query";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Badge from "../atoms/Badge";
import { Link, useNavigate } from "react-router-dom"; // eslint-disable-line no-unused-vars

const OptionColumn = ({ product }) => {
  const { productName, price } = product;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOnClickOption = (option) => {
    // 동일 옵션 클릭 방지
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

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <Box className="w-[512px] m-4">
      <h1 className="text-2xl">{productName}</h1>
      <div className="flex justify-between my-4 items-center">
        <div>
          <Badge color="yellow" className="bg-black text-white">
            {comma(price * 2)}원~
          </Badge>
          <Badge color="yellow" className="bg-yellow-300 ml-2 font-bold">
            톡딜가 {comma(price)}원~
          </Badge>
        </div>
        <div className="text-3xl text-blue-500">
          50%
        </div>
      </div>
      <h3 className=" text-lg font-bold">옵션 선택</h3>
      {/* 옵션 담기를 할 수 있는 영역 */}
      <OptionList options={product.options} onClick={handleOnClickOption} />
      <Box>
        <div className="shippingMethod mt-4">
          <span className="font-bold">배송방법 </span>
          <span>택배배송</span>
        </div>
        <div className="shippingCost">
          <span className="font-bold">배송비</span>
          <Box className="bg-gray-200 border border-gray-400 text-sm p-1">
            무료배송
          </Box>
        </div>
        제주 추가 3,000원, 제주 외 도서지역 추가 6,000원
      </Box>
      {/* 담긴 옵션이 표시 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list">
          {/* 수량 변경 기능 */}
          <li className="bg-gray-100 my-2 p-2">
            <div className="flex justify-between">
              <div className="name">{option.name}</div>
              <div className="price">
                {comma(option.price * option.quantity)}원
              </div>
            </div>
            <Counter
              onIncrease={(count) => handleOnChange(count, option.optionId)}
              onDecrease={(count) => handleOnChange(count, option.optionId)}
            />
          </li>
        </ol>
      ))}
      <hr />
      <div className="flex justify-between my-4">
        <div>
          총 수량:{" "}
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </div>
        <div>
          총 주문금액:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price;
            }, 0)
          )}
          원
        </div>
      </div>
      <div className="button-group">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          className="w-36 h-12 bg-gray-900 rounded-lg text-white text-sm"
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
                  if (selectedOptions.length === 1) {
                    alert("장바구니가 비었습니다.");
                  }
                },
                onError: (error) => {
                  alert("장바구니 담기에 실패했습니다: " + error);
                },
              }
            );
          }}
        >
          장바구니 담기
        </Button>
        <Button
          className=" w-80 h-12 bg-yellow-300 rounded-lg text-sm ml-4"
          onClick={() => {
            alert("주문 결제 페이지로 이동합니다.");
          }}
        >
          <Link to="/order" className="block m-auto">
          구매하기
          </Link>
        </Button>
      </div>
    </Box>
  );
};

export default OptionColumn;