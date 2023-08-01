import OptionList from "../Atoms/OptionList";
import Counter from "../Atoms/Counter";
import { useState } from "react";
import { comma } from "../../Utils/convert";
import { useMutation } from "@tanstack/react-query";
import ImgButton from "../Atoms/ImgButton";
import { addCart } from "../../Servicies/cart";
import "../../Styles/OptionColumns.css";
import Dropdown from "../Atoms/Dropdown";
import { Button, Container } from "react-bootstrap";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OptionColumn = ({ product }) => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);
    setIsOpen(!isOpen);

    // 이미 선택된 옵션인 경우: alert
    if (isOptionSelected) {
      alert("이미 선택된 옵션입니다.");
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

  // 장바구니 담기 api 처리
  const { mutate } = useMutation({
    mutationFn: addCart,
  });

  return (
    <div className="option-column">
      <h3 className="font-bold pb-5">옵션 선택</h3>
      <div className="option-container">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center p-3 justify-between bg-stone-100 w-full"
        >
          <span>-주문 선택-</span>
          {isOpen ? (
            <span>
              <BsChevronUp />
            </span>
          ) : (
            <span>
              <BsChevronDown />
            </span>
          )}
        </button>
        {isOpen && (
          <OptionList
            options={product.options}
            // 사용자가 선택한 option
            onClick={handleOnClickOption}
          />
        )}
      </div>

      {/* 담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={`selected-option-key-${option.optionId}`} className="selected-option-list">
          <li className="selected-option">
            <div className="name">{option.name}</div>
            <div className="flex items-center">
              <Counter
                onIncrease={(count) => handleOnChange(count, option.optionId)}
                onDecrease={(count) => handleOnChange(count, option.optionId)}
              />
              <span className="price">{comma(option.price * option.quantity)}원</span>
            </div>
          </li>
        </ol>
      ))}
      <hr className="mt-6 mb-3" />
      <div className="total-price">
        <span>
          총 수량:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity; // acc: 이전 값, cur: 햔재 선택된 element
            }, 0)
          )}
          개
        </span>
        <span>
          총 상품금액:{" "}
          {comma(
            selectedOptions.reduce((acc, cur) => {
              return acc + cur.quantity * cur.price; // acc: 이전 값, cur: 현재 선택된 element
            }, 0)
          )}
          원
        </span>
      </div>

      {/* 장바구니 담기 버튼 */}
      <div className="button-group">
        <div className="w-14 h-14 rounded-lg bg-stone-600 m-0.5"></div>
        <ImgButton
          btnClass="w-14 h-14 rounded-lg bg-black m-0.5"
          onClick={() => {
            // 로그인 상태가 아닌 경우 처리하기
            if (localStorage.getItem("token") === null) {
              alert("로그인이 필요합니다!");
              navigate("/loginpage");
            }
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
                onError: (error) => {
                  alert("장바구니 담기에 실패했습니다.");
                },
              }
            );
          }}
          imgClass="w-8 mx-auto"
          src="/cart_white.png"
          alt="장바구니에 담기"
        ></ImgButton>
        <Button className="w-42 h-14 rounded-lg bg-yellow-300 m-0.5 text-center items-center text-lg">구매하기</Button>
      </div>
    </div>
  );
};

export default OptionColumn;
