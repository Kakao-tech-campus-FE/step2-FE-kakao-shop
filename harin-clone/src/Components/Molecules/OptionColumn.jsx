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

const OptionColumn = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickOption = (option) => {
    const isOptionSelected = selectedOptions.find((el) => el.optionId === option.id);
    setIsOpen(!isOpen);

    // 이미 선택된 옵션인 경우: alert / 수량을 증가시킴
    if (isOptionSelected) {
      // setSelectOptions((prev) =>
      //   prev.map((el) =>
      //     el.optionId === option.id
      //       ? {...el, quantity: el.quantity + 1 }
      //       : el
      //   )
      // );
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
      <Container className="gird grid-cols-1 w-full rounded-sm border border-stone-300 mb-3">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center w-full bg-stone-100 p-3"
        >
          <div className="ml-2 mr-auto">-주문 선택-</div>
          {isOpen ? (
            <div className="mr-2">
              <BsChevronUp />
            </div>
          ) : (
            <div className="mr-2">
              <BsChevronDown />
            </div>
          )}
        </button>
        {/* <Dropdown isOpen={isOpen}>
          <OptionList
            options={product.options}
            // 사용자가 선택한 option
            onClick={handleOnClickOption}
          />
        </Dropdown> */}
        {isOpen ? (
          <OptionList
            options={product.options}
            // 사용자가 선택한 option
            onClick={handleOnClickOption}
            className="border"
          />
        ) : null}
      </Container>

      {/* 담긴 옵션이 표기 */}
      {selectedOptions.map((option) => (
        <ol key={`selected-option-key-${option.id}`} className="selected-option-list">
          <li className="selected-option">
            <div className="name">{option.name}</div>
            <div className="flex items-center">
              <Counter
                onIncrease={(count) => handleOnChange(count, option.id)}
                onDecrease={(count) => handleOnChange(count, option.id)}
              />
              <span className="price">{comma(option.price)}원</span>
            </div>
          </li>
        </ol>
      ))}
      <hr />
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
              return acc + cur.quantity * cur.price; // acc: 이전 값, cur: 햔재 선택된 element
            }, 0)
          )}
          원
        </span>
      </div>
      <div className="button-group">
        <div className="w-14 h-14 rounded-lg bg-stone-600 m-0.5"></div>
        <ImgButton
          btnClass="w-14 h-14 rounded-lg bg-black m-0.5"
          onClick={() => {
            mutate(
              selectedOptions.map((el) => {
                return {
                  optionId: el.id,
                  quantity: el.quantity,
                };
              }),
              {
                onSucess: () => {
                  alert("장바구니에 담겼습니다.");
                },
                onError: () => {
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
