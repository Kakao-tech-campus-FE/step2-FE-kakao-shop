import React from "react";
import OptionList from "../molecules/OptionList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectedOption from "../molecules/SelectedOption";
import { useMutation } from "react-query";
import { addCart } from "../../../apis/cart";
import Button from "../../common/atoms/Button";
import { comma } from "../../../utils/convert";
import Logo from "../../common/atoms/Logo";
import cartWhite from "../../../assets/icons/cart_white.png";
import DeliveryOption from "../atoms/DeliveryOption";
import Box from "../../common/atoms/Box";
import { updateCartNum } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

export default function OptionColumn({ product }) {
  const { options } = product;
  const [selectedOption, setSelectedOption] = useState([]);
  const cartNum = useSelector((state) => state.cart.cartNum);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenOption, setIsOpenOption] = useState(true);

  /**
   * selectedOption에 옵션을 추가하는 함수(quantity: 1)
   */
  const handleOnClickOption = (option, index) => {
    if (selectedOption.find((item) => item.id === option.id)) {
      alert("이미 선택된 옵션입니다.");
      return;
    }
    setIsOpenOption(false);
    setSelectedOption((prev) => [
      ...prev,
      {
        id: option.id,
        quantity: 1,
        name: option.optionName,
        price: option.price,
        index,
      },
    ]);
  };

  const { mutate } = useMutation(addCart);

  return (
    <div className=" w-[360px] p-8 h-fit">
      <h3 className=" mt-0 font-bold text-base ">옵션 선택</h3>
      <Box className="max-h-[360px] overflow-scroll w-[360px]">
        {/* 옵션 담기를 하는 영역 */}
        <OptionList
          options={options}
          onClick={handleOnClickOption}
          isOpenOption={isOpenOption}
          setIsOpenOption={setIsOpenOption}
        />
        {/* 담긴 옵션이 표기되는 영역 */}
        <SelectedOption
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </Box>
      {/* 배송 옵션 역역 */}
      <DeliveryOption />
      {/* 총 수량, 금액 영역 */}
      <div className="flex justify-between w-[330px] py-7 text-lg font-bold tracking-tighter">
        <span>
          총 수량{" "}
          {selectedOption.reduce((acc, cur) => {
            return acc + cur.quantity;
          }, 0)}
          개
        </span>
        <span>
          총 주문금액{" "}
          <span className=" text-red-500">
            {comma(
              selectedOption.reduce((acc, cur) => {
                return acc + cur.price * cur.quantity;
              }, 0)
            )}{" "}
          </span>
          원
        </span>
      </div>

      {/* 버튼 영역: 장바구니 담기 버튼, 구매 버튼 */}
      <div className="flex w-[330px]">
        <Button
          className="border-0 bg-black cursor-pointer w-16 h-16 rounded-md flex justify-center items-center"
          onClick={() => {
            console.log(selectedOption);
            mutate(
              selectedOption.map((item) => {
                return { optionId: item.id, quantity: item.quantity };
              }),
              {
                onSuccess: () => {
                  alert("장바구니에 상품이 담겼습니다.");
                  dispatch(updateCartNum(cartNum + 1)); // 장바구니에 담긴 상품 수를 업데이트
                  setSelectedOption([]);
                },
                onError: () => {
                  alert("장바구니 담기에 실패했습니다.");
                },
              }
            );
          }}
        >
          <Logo src={cartWhite} alt="whiteCartIcon" className=" w-12 " />
        </Button>
        <Button
          onClick={() => navigate("/order")}
          className="grow ml-1 rounded-md border-0 bg-[#ffe342] text-xl tracking-tighter font-bold cursor-pointer"
        >
          톡딜가로 구매하기
        </Button>
      </div>
    </div>
  );
}

// ⭐️ Prototype.method
// find(), findIndex(), map(), forEach(), filter(), reduce(),
// some(), every(), includes(), splice(), slice(), concat(),
// sort(), reverse(), join(), toString(), toLocaleString(),
// indexOf(), lastIndexOf(), push(), pop(), shift(), unshift(),
