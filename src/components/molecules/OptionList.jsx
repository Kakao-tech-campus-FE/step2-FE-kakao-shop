import React from "react";
import { comma } from "../../utils/convert";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import upArrow from "../../assets/icons/up_arrow.png";
import downArrow from "../../assets/icons/down_arrow.png";
import Logo from "../atoms/Logo";

export default function OptionList({
  options,
  onClick,
  isOpenOption,
  setIsOpenOption,
}) {
  return (
    <Container className=" w-[330px] border-solid border-[1px] cursor-pointer ">
      <Button
        className="w-full flex justify-between items-center px-3 h-10 bg-zinc-50 border-0 cursor-pointer"
        onClick={() => {
          setIsOpenOption((prev) => !prev);
        }}
      >
        <span>선택</span>
        <Logo
          src={isOpenOption ? upArrow : downArrow}
          alt={isOpenOption ? "upArrow" : "downArrow"}
          className="w-2"
        ></Logo>
      </Button>
      {isOpenOption && (
        <ol className=" list-none pl-0 m-0 ">
          {options.map((option, index) => (
            <li
              className="w-full h-14 flex flex-col pl-3 border-solid border-[1px] border-zinc-100 justify-center text-sm"
              key={option.id}
              onClick={() => onClick(option, index + 1)}
            >
              <span>
                {index + 1}. {option.optionName}
              </span>
              <span>{comma(option.price)}원</span>
            </li>
          ))}
        </ol>
      )}
    </Container>
  );
}
