import React from "react";

const COLOR = {
  transparent: "bg-transparent text-black",
  yellow: "bg-yellow text-black",
  black: "bg-black text-white",
};

const RADIUS = {
  sm: "rounded-md",
  lg: "rounded-full",
};

const TEXTSIZE = {
  sm: "text-sm",
  lg: "text-lg",
};

const beforeContentStyle =
  "relative before:absolute before:top-0 before:bottom-0 before:-left-1 before:my-auto before:content-[''] before:w-before before:h-5 before:bg-gray-400";

/*
 * type: 기본이 submit인데 중복확인 버튼을 클리했을 때 submit 이벤트가 발생하지 않게 하기위한 props
 * before: 로그인(로그아웃) 버튼의 왼쪽에 구분선을 표시해주기 위한 props
 */
export default function Button({
  children,
  type,
  margin,
  padding,
  height,
  textsize,
  color,
  radius = "",
  before,
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`${padding} ${margin} ${height} ${TEXTSIZE[textsize]} ${
        COLOR[color]
      } ${RADIUS[radius]} ${before ? beforeContentStyle : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
