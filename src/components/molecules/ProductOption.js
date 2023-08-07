import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { convertToPrice } from "utils/convert.js";
import { addCartReq } from "apis/cart.js";

import Button from "components/atoms/Button.js";
import OptionList from "components/atoms/OptionList.js";
import Counter from "components/atoms/Counter.js";
import Image from "components/atoms/Image.js";
import Toast from "components/atoms/Toast.js";

import cart_white from "assets/icon/cart_white.png";

const staticServerUri = process.env.REACT_APP_PATH || "";

export default function ProductOption({ product }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(-1);
  const { mutate } = useMutation({ mutationFn: addCartReq });
  const navigate = useNavigate();

  const totalPrice = useMemo(
    () =>
      convertToPrice(
        selectedOptions.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
      ),
    [selectedOptions]
  );

  const totalQuantity = useMemo(
    () => selectedOptions.reduce((acc, cur) => acc + cur.quantity, 0),
    [selectedOptions]
  );

  const handleOptionClick = (option) => {
    if (!window.localStorage.getItem("token"))
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate(staticServerUri + "/login");
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
        navigate(staticServerUri + "/login");
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
        setVisible(true);
        if (timeoutId !== -1) clearTimeout(timeoutId);
        setTimeoutId(
          setTimeout(() => {
            setVisible(false);
          }, 1000 * 3)
        );
      },
      onError: (err) => {
        console.dir(err);
      },
    });
  };

  const handleBuyClick = () => {
    if (!window.localStorage.getItem("token"))
      if (window.confirm("로그인이 필요한 메뉴입니다.\n로그인 하시겠습니까?"))
        navigate(staticServerUri + "/login");
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
        navigate(staticServerUri + "/order");
      },
      onError: (err) => {
        console.dir(err);
      },
    });
  };

  return (
    <div className="inline-flex w-96 h-[28rem] p-6 flex-col justify-between">
      <div className="overflow-y-auto">
        <h3 className="mb-2 text-left font-bold">옵션선택</h3>
        <OptionList options={product.options} onClick={handleOptionClick} />
        <div className="space-y-2">
          {selectedOptions.map((opt) => (
            <div
              key={`selected-${opt.id}`}
              className="block w-full p-3 bg-gray-100 space-y-2"
            >
              <div className="flex justify-between">
                <span className="inline-block w-[95%] overflow-hidden whitespace-nowrap text-ellipsis text-left text-sm">
                  {opt.optionName}
                </span>
                <Button
                  className="w-[5%] text-gray-400 font-bold"
                  onClick={() => handleXClick(opt)}
                >
                  ×
                </Button>
              </div>
              <div className="flex justify-between">
                <Counter value={opt} setCount={handleCounterClick} />
                <span className="text-right">
                  {convertToPrice(opt.price * opt.quantity)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <hr className="my-4" />
        <p className="flex justify-between text-xl">
          <span>총 수량 {totalQuantity}개</span>
          <span>
            총 주문금액{" "}
            <span className="font-bold text-red-600">{totalPrice}</span>
          </span>
        </p>
        <div className="flex mt-3 items-center justify-between gap-1">
          <Button className="w-14" onClick={handleCartClick}>
            <Image
              className="w-14 rounded-lg"
              src={cart_white}
              alt={"cart_white"}
            />
          </Button>
          <Button
            className=" bg-yellow-300 w-[80%] p-3 rounded text-[1.2rem]"
            onClick={handleBuyClick}
          >
            바로구매
          </Button>
        </div>
      </div>
      {visible && <Toast />}
    </div>
  );
}
