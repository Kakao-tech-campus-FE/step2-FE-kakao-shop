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
import { addProduct } from "../../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import LoginModal from "../../common/molecules/LoginModal";
import Toast from "../../common/atoms/Toast";
import { useQueryClient } from "react-query";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export default function OptionColumn({ product }) {
  const { options, id } = product;
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenOption, setIsOpenOption] = useState(true);
  const { mutate } = useMutation(addCart);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLogged = useSelector((state) => state.login.isLogged);
  const [isOptionToastVisible, setIsOptionToastVisible] = useState(false);
  const [isSelectToastVisible, setIsSelectToastVisible] = useState(false);
  const [isCartToastVisible, setIsCartToastVisible] = useState(false);
  const queryClient = useQueryClient();

  const handleOnClickOption = (option, index) => {
    if (!isLogged) {
      setIsLoginModalOpen(true);
      return;
    }
    if (selectedOption.find((item) => item.id === option.id)) {
      setIsOptionToastVisible(true);
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

  const handleOnClickCart = async (navigateCart) => {
    if (selectedOption.length === 0) {
      setIsSelectToastVisible(true);
      return false;
    }
    mutate(
      selectedOption.map((item) => {
        return { optionId: item.id, quantity: item.quantity };
      }),
      {
        onSuccess: () => {
          setIsCartToastVisible(true);
          dispatch(addProduct(id));
          queryClient.invalidateQueries("cart");
          setSelectedOption([]);
          if (navigateCart) {
            navigate(staticServerUrl + "/carts");
          }
        },
        onError: (error) => {
          console.error("Request failed:", error.message);
        },
      },
    );
  };

  return (
    <div className=" h-fit w-[360px] p-8">
      {/* 모달 & 토스트 */}
      {isLoginModalOpen && (
        <LoginModal setIsLoginModalOpen={setIsLoginModalOpen} />
      )}
      <Toast
        setIsToastVisible={setIsOptionToastVisible}
        isToastVisible={isOptionToastVisible}
      >
        이미 선택한 옵션입니다.
      </Toast>
      <Toast
        setIsToastVisible={setIsSelectToastVisible}
        isToastVisible={isSelectToastVisible}
      >
        옵션을 먼저 선택해주세요.
      </Toast>
      <Toast
        setIsToastVisible={setIsCartToastVisible}
        isToastVisible={isCartToastVisible}
      >
        장바구니에 상품이 담겼습니다.
        <Button
          onClick={() => {
            navigate(staticServerUrl + "/carts");
          }}
          className="cursor-pointer border-0 bg-black px-4 text-base text-yellow-300"
        >
          바로가기
        </Button>
      </Toast>
      <h3 className=" mt-0 text-base font-bold ">옵션 선택</h3>
      <Box className="max-h-[360px] w-[360px] overflow-y-auto">
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
      <div className="flex w-[330px] justify-between py-7 text-lg font-bold tracking-tighter">
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
              }, 0),
            )}{" "}
          </span>
          원
        </span>
      </div>

      {/* 버튼 영역: 장바구니 담기 버튼, 구매 버튼 */}
      <div className="flex w-[330px]">
        <Button
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-md border-0 bg-black"
          onClick={() => {
            handleOnClickCart(false);
          }}
        >
          <Logo src={cartWhite} alt="whiteCartIcon" className=" w-12 " />
        </Button>
        <Button
          onClick={() => {
            handleOnClickCart(true);
          }}
          className="ml-1 grow cursor-pointer rounded-md border-0 bg-[#ffe342] text-xl font-bold tracking-tighter"
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
