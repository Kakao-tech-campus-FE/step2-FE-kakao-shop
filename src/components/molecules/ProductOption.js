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
    if (selectedOptions.find((opt) => opt.id === option.id)) {
      alert("이미 선택된 옵션입니다.");
    } else
      setSelectedOptions((prevOptions) => [
        ...prevOptions,
        { ...option, quantity: 1 },
      ]);
  };

  const handleIncDecClick = (opt, qtt) => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions.filter((preOpt) => preOpt.id !== opt.id),
      { ...opt, quantity: qtt },
    ]);
  };

  const handleXClick = (opt) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((preOpt) => preOpt.id !== opt.id)
    );
  };

  const handleCartClick = () => {
    if (selectedOptions.length===0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    mutate(selectedOptions, {
      onError: (err) => {
        console.dir(err);
      },
    });
    alert("장바구니에 상품이 담겼습니다.");
  };

  const handleBuyClick = () => {
    if (selectedOptions.length===0) {
      alert("옵션을 먼저 선택해주세요.");
      return;
    }
    mutate(selectedOptions, {
      onError: (err) => {
        console.dir(err);
      },
    });
    navigate("/order");
  };

  return (
    <div className="inline-block">
      {/* 옵션 리스트 */}
      <h3>옵션 선택</h3>
      <OptionList options={product.options} onClick={handleOptionClick} />
      {/* 선택 옵션 리스트 */}
      <div>
        {selectedOptions.map((opt) => (
          <div key={`selected-${opt.id}`} className="">
            <p>{opt.optionName}</p>
            <Counter option={opt} onClick={handleIncDecClick} />
            <p>{convertToPrice(opt.price * opt.quantity)}</p>
            <Button onClick={() => handleXClick(opt)}>X</Button>
          </div>
        ))}
      </div>
      <hr />
      {/* 총 수량 및 가격 */}
      <div>
        <span>
          총 수량
          {selectedOptions.reduce((acc, cur) => acc + cur.quantity, 0)}개
        </span>
        <span>
          총 주문금액
          <span>
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
      <div>
        <Button onClick={handleCartClick}>
          <Photo className="" src={cart_white} alt={"cart_white"} />
        </Button>
        <Button onClick={handleBuyClick}>바로구매</Button>
      </div>
    </div>
  );
}
