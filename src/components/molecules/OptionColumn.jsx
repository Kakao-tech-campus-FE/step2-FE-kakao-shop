import { useState } from "react";
import OptionList from "../atoms/OptionList";
import { comma } from "../../utils/convert";
import Counter from "../atoms/Counter";
import { addCart } from "../../services/cart";
import { useMutation } from "@tanstack/react-query";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import Badge from "../atoms/Badge";

const staticServerUri = process.env.REACT_APP_PATH || "";

const OptionColumn = ({ product }) => {
  const { starCount, productName, price } = product;
  const [selectedOptions, setSelectedOptions] = useState([]);

  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  /**
   * 클릭된 상품을 selectedOptions 상태에 추가
   * @param {object} option 클릭된 옵션
   */
  const handleClickOption = (option) => {
    console.log(option);
    // 동일 옵션 클릭 방지
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

  /**
   * 선택된 옵션의 수량을 변경
   * @param {number} count 옵션 수량
   * @param {number} optionId 수량 변경할 옵션 아이디
   */
  const handleChange = (count, optionId) => {
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

  /**
   * 선택된 옵션을 삭제하여 selecedOptions 상태 업데이트
   * @param {number} optionId 삭제할 옵션 ID
   */
  const handleRemove = (optionId) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option.optionId !== optionId)
    );
  };

  return (
    <Box className="w-[512px] m-4 flex flex-col gap-4">
      {/* 상품 정보 */}
      <div className="wrapper flex flex-col gap-2">
        <div className="starCount text-blue-500">★★★★★ {starCount}점</div>
        <h1 className="text-2xl">{productName}</h1>
        <div className="flex justify-between items-center">
          <div>
            <Badge color="yellow" className="bg-black text-white">
              {comma(price * 2)}원~
            </Badge>
            <Badge color="yellow" className="bg-yellow-300 ml-2 font-bold">
              톡딜가 {comma(price)}원~
            </Badge>
          </div>
          <div className="text-3xl text-blue-500">50%</div>
        </div>
      </div>

      {/* 옵션 선택 */}
      <div className="wrapper-option flex flex-col gap-2">
        <h3 className=" text-lg font-bold">옵션 선택</h3>
        <OptionList options={product.options} onClick={handleClickOption} />
      </div>

      {/* 배송 방법 */}
      <div>
        <div className="flex gap-4">
          <div className="font-bold">
            <div>배송방법</div>
            <div>배송비</div>
          </div>
          <div>
            <div>택배배송</div>
            <div>무료배송</div>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          제주 추가 3,000원, 제주 외 도서지역 추가 6,000원
        </div>
      </div>

      {/* 선택된 옵션 */}
      {selectedOptions.map((option) => (
        <ol key={option.optionId} className="selected-option-list">
          <li className="bg-gray-100 p-4 flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="name">{option.name}</div>
              <button
                className="text-gray-500"
                children="✕"
                onClick={() => {
                  handleRemove(option.optionId);
                }}
              />
            </div>
            <div className="flex justify-between">
              <Counter
                onIncrease={(count) => handleChange(count, option.optionId)}
                onDecrease={(count) => handleChange(count, option.optionId)}
              />
              <div className="price">
                {comma(option.price * option.quantity)}원
              </div>
            </div>
          </li>
        </ol>
      ))}

      {/* 구분선 */}
      <hr />

      {/* 총 수량, 총 상품금액 */}
      <div className="flex justify-between text-xl">
        <div>
          총 수량:{" "}
          {selectedOptions.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </div>
        <div>
          총 상품금액:{" "}
          <span className="font-bold text-red-500">
            {comma(
              selectedOptions.reduce((acc, cur) => {
                return acc + cur.quantity * cur.price;
              }, 0)
            )}
          </span>
          원
        </div>
      </div>

      {/* 찜, 장바구니, 구매하기 버튼 */}
      <div className="button-group flex justify-between">
        {/* 장바구니 담기 버튼 위치 */}
        <Button
          className="w-20 h-20 bg-gray-600 rounded-lg"
          onClick={() => {
            alert("준비중입니다.");
          }}
        >
          <img
            className="inline"
            src={staticServerUri + "/icons/heart.svg"}
            alt="장바구니 담기"
            width={24}
          />
        </Button>
        <Button
          className="w-20 h-20 bg-gray-900 rounded-lg text-white"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.optionId,
                  quantity: el.quantity,
                };
              }),
              {
                onSuccess: () => {},
                onError: (error) => {
                  alert("장바구니 담기에 실패했습니다: " + error);
                },
              }
            );
          }}
        >
          <img
            className="inline"
            src={staticServerUri + "/icons/cart.svg"}
            alt="장바구니 담기"
            width={24}
          />
        </Button>
        <Button
          className="w-72 h-20 bg-yellow-300 rounded-lg font-bold"
          onClick={() => {
            alert("준비중입니다.");
          }}
        >
          <img
            className="inline"
            src={staticServerUri + "/icons/talk.svg"}
            alt="장바구니 담기"
            width={24}
          />{" "}
          구매하기
        </Button>
      </div>
    </Box>
  );
};

export default OptionColumn;
