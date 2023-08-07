import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

import Counter from "../atoms/Counter";
import OptionList from "../atoms/OptionList";

import { comma } from "../../utils/convert";
import { addCart } from "../../services/cart";
import { RxCross2 } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AlertContext } from "../pages/ProductDetailPage";
import { ToastContext } from "../../App";

const OptionColumn = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState([]);

  const navigator = useNavigate();
  const queryClient = useQueryClient();

  const { setAlertIsOpened } = useContext(AlertContext);
  const { showToast } = useContext(ToastContext);

  const handleOnClickOption = (option) => {
    if (selectedOption.find((el) => el.id === option.id)) {
      setSelectedOption((prev) => {
        return prev.map((el) => {
          if (el.id === option.id) {
            showToast("이미 선택한 옵션입니다.");
          }
          return el;
        });
      });
      return;
    }

    setSelectedOption((prev) => [
      ...prev,
      {
        id: option.id,
        quantity: 1,
        price: option.price,
        optionName: option.optionName,
      },
    ]);
  };

  const handleOnChangeQuantity = (value, optionId) => {
    setSelectedOption((prev) => {
      return prev.map((el) => {
        if (el.id === optionId) {
          return {
            ...el,
            quantity: value,
          };
        } else {
          return el;
        }
      });
    });
  };

  const { mutate } = useMutation({
    mutationFn: addCart,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    onError: (error) => {
      console.log("error", error);
      alert(error.response.data.error.message);
    },
  });

  return (
    <div className="option-column sticky top-20 h-full w-1/4 border-l p-2">
      <h3 className={"text-lg font-medium"}>옵션 선택</h3>
      <div className={"h-80 overflow-y-auto pe-3"}>
        <OptionList options={product.options} onClick={handleOnClickOption} />

        {selectedOption.map((option) => (
          <ol key={option.id} className="selected-option-list w-full">
            <li className="selected-option">
              <div className={"flex flex-row justify-between p-1"}>
                <span className="option-name block overflow-hidden text-ellipsis whitespace-nowrap text-justify">
                  {option.optionName}
                </span>
                <button
                  className={"delete-button"}
                  onClick={() =>
                    setSelectedOption((prev) =>
                      prev.filter((el) => el.id !== option.id),
                    )
                  }
                >
                  <RxCross2 />
                </button>
              </div>
              <div className={"flex flex-row justify-between p-1"}>
                <span className="option-price block text-sm">
                  {comma(option.price * option.quantity)}원
                </span>
                <div className={"w-1/3"}>
                  <Counter
                    value={option.quantity}
                    handleOnChange={(count) =>
                      handleOnChangeQuantity(count, option.id)
                    }
                    handleOnLowerBound={() => {
                      showToast("주문 가능 수량은 1~1,000개입니다.");
                      console.log("lower bound");
                    }}
                    handleOnUpperBound={() => {
                      showToast("주문 가능 수량은 1~1,000개입니다.");
                      console.log("upper bound");
                    }}
                    upperBound={1000}
                    lowerBound={1}
                  />
                </div>
              </div>
            </li>
          </ol>
        ))}
      </div>

      <div className={"total-option-group relative bottom-0"}>
        <div className={"total-price mb-3 mt-5"}>
          <div className={"flex flex-row justify-between px-1"}>
            <span>
              총 수량 :{" "}
              {selectedOption.reduce((acc, cur) => acc + cur.quantity, 0)}개
            </span>
            <span>
              총 상품금액 :
              {comma(
                selectedOption.reduce(
                  (acc, cur) => acc + cur.quantity * cur.price,
                  0,
                ),
              )}
              원
            </span>
          </div>
        </div>
        <div className={"button-group flex h-12 flex-row justify-between"}>
          <button
            className={
              "add-cart flex w-1/4 cursor-pointer items-center justify-center rounded-lg bg-kakao-dark-gray py-2"
            }
            onClick={() => {
              if (localStorage.getItem("token") === null) {
                setAlertIsOpened(true);
              } else if (selectedOption.length === 0) {
                showToast("옵션을 선택해주세요.");
              } else {
                mutate(
                  selectedOption.map((option) => {
                    return {
                      optionId: option.id,
                      quantity: option.quantity,
                    };
                  }),
                );
                showToast("장바구니에 추가되었습니다.");
              }
            }}
          >
            <BsCart2 color={"white"} size={24} />
          </button>
          <button
            className={
              "buy-directly flex w-2/4 items-center justify-center rounded-lg bg-kakao-yellow"
            }
            onClick={() => {
              if (localStorage.getItem("token") === null) {
                setAlertIsOpened(true);
              } else if (selectedOption.length === 0) {
                showToast("옵션을 선택해주세요.");
              } else {
                mutate(
                  selectedOption.map((option) => {
                    return {
                      optionId: option.id,
                      quantity: option.quantity,
                    };
                  }),
                );
                navigator("/carts");
              }
            }}
          >
            바로 구매
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionColumn;
