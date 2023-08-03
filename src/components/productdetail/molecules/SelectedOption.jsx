import React from "react";
import Counter from "../../common/atoms/Counter";
import closeIcon from "../../../assets/icons/close.png";
import Logo from "../../common/atoms/Logo";
import Button from "../../common/atoms/Button";
import { comma } from "../../../utils/convert";

export default function SelectedOption({ selectedOption, setSelectedOption }) {
  /**
   * 옵션의 수량을 count로 변경하는 함수
   */
  const handleOnChange = (count, id) => {
    setSelectedOption((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: count };
        }
        return item;
      });
    });
  };

  const handleOnDelete = (id) => {
    setSelectedOption((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      {selectedOption.map((option) => (
        <div
          key={option.id}
          className=" w-[330px] bg-zinc-50 relative min-h-[1px] text-sm mt-3"
        >
          <Button
            className=" m-0 p-0 w-0 h-0 border-0 pointer-events-auto cursor-pointer"
            onClick={() => {
              handleOnDelete(option.id);
            }}
          >
            <Logo
              src={closeIcon}
              alt={"closeIcon"}
              className=" w-3 absolute right-3 top-3 cursor-pointer"
            ></Logo>
          </Button>
          <ol className=" list-none m-0 px-5 pb-5">
            <li>
              <span>{option.index}. </span>
              <span>{option.name}</span>
              <div className="flex items-center justify-between pt-3">
                <Counter
                  value={1} // ProductDetailPage에서는 1로 시작
                  onChange={(count) => handleOnChange(count, option.id)}
                />
                <span>{comma(option.price * option.quantity)}원</span>
              </div>
            </li>
          </ol>
        </div>
      ))}
    </>
  );
}
