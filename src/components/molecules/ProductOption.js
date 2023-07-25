import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { convertToPrice } from "utils/convert";
import { addCartReq } from "apis/cart";

import Button from "components/atoms/Button";
import OptionList from "components/atoms/OptionList";
import Counter from "components/atoms/Counter";
import Photo from "components/atoms/Photo";

import cart_white from "assets/icon/cart_white.png";

export default function ProductOption({ product }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { mutate } = useMutation({ mutationFn: addCartReq });
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (!window.localStorage.getItem("token"))
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate("/login");
      else return;
    if (selectedOptions.find((opt) => opt.id === option.id)) {
      alert("이미 선택된 옵션입니다.");
    } else
      setSelectedOptions((prevOptions) =>
        [...prevOptions, { ...option, quantity: 1 }].sort((a, b) => a.id - b.id)
      );
  };

  const handleCounterClick = (opt, qtt) => {
    setSelectedOptions((prevOptions) =>
      [
        ...prevOptions.filter((preOpt) => preOpt.id !== opt.id),
        { ...opt, quantity: qtt },
      ].sort((a, b) => a.id - b.id)
    );
  };

  const handleXClick = (opt) => {
    setSelectedOptions((prevOptions) =>
      prevOptions
        .filter((preOpt) => preOpt.id !== opt.id)
        .sort((a, b) => a.id - b.id)
    );
  };

  const handleCartClick = () => {
    if (!window.localStorage.getItem("token"))
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate("/login");
      else return;
    if (selectedOptions.length === 0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    const formattedData = selectedOptions.map((item) => ({
      optionId: item.id,
      quantity: item.quantity,
    }));
    mutate(formattedData, {
      onSuccess: () => {
        setSelectedOptions([]);
        alert("장바구니에 상품이 담겼습니다.");
      },
      onError: (err) => {
        console.dir(err);
      },
    });
  };

  const handleBuyClick = () => {
    if (!window.localStorage.getItem("token"))
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate("/login");
      else return;
    if (selectedOptions.length === 0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    const formattedData = selectedOptions.map((item) => ({
      optionId: item.id,
      quantity: item.quantity,
    }));
    mutate(formattedData, {
      onSuccess: () => {
        navigate("/order");
      },
      onError: (err) => {
        console.dir(err);
      },
    });
  };

  return (
    <div className="inline-block w-96 p-4 border">
      {/* 옵션 리스트 */}
      <h3 className="text-left font-bold">옵션 선택</h3>
      <OptionList options={product.options} onClick={handleOptionClick} />
      {/* 선택 옵션 리스트 */}
      <div className="text-center space-y-2">
        {selectedOptions.map((opt) => (
          <div
            key={`selected-${opt.id}`}
            className="block w-72 mx-auto overflow-x-hidden bg-gray-100"
          >
            <span>{opt.optionName}</span>
            <Button
              className="w-8 text-gray-400 font-bold"
              onClick={() => handleXClick(opt)}
            >
              ×
            </Button>
            <br />
            <Counter value={opt} setCount={handleCounterClick} />
            <span className="text-right">
              {convertToPrice(opt.price * opt.quantity)}
            </span>
          </div>
        ))}
      </div>
      <hr />
      {/* 총 수량 및 가격 */}
      <div className="space-x-8 text-xl">
        <span>
          총 수량
          {selectedOptions.reduce((acc, cur) => acc + cur.quantity, 0)}개
        </span>
        <span>
          총 주문금액{" "}
          <span className="font-bold text-red-600">
            {convertToPrice(
              selectedOptions.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0
              )
            )}
          </span>
        </span>
      </div>
      {/* 장바구니 및 바로구매 */}
      <div className="space-x-1">
        <Button onClick={handleCartClick}>
          <Photo
            className="w-12 rounded-xl"
            src={cart_white}
            alt={"cart_white"}
          />
        </Button>
        <Button
          className=" bg-yellow-300 p-2 rounded text-[1.2rem]"
          onClick={handleBuyClick}
        >
          바로구매
        </Button>
      </div>
    </div>
  );
}
