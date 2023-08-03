import React from "react";

const COLOR = {
  transparent: "bg-transparent text-black",
  yellow: "bg-yellow text-black",
  black: "bg-black text-white",
  white: "bg-white text-black",
};

const RADIUS = {
  xs: "rounded-sm",
  sm: "rounded-md",
  lg: "rounded-full",
};

const TEXTSIZE = {
  sm: "text-sm",
  lg: "text-lg",
};

const FONTWEIGHT = {
  semibold: "font-semibold",
  bold: "font-bold",
};

const beforeContentStyle =
  "relative before:absolute before:top-0 before:bottom-0 before:-left-1 before:my-auto before:content-[''] before:w-before before:h-5 before:bg-gray-400";

/**
 * @description Button 컴포넌트
 *
 * @param {object} props - Button 컴포넌트의 속성(props).
 * @param {React.ReactNode} props.children - 버튼 내부의 자식 요소(children).
 * @param {string} [props.type="submit"] - 버튼의 타입(type). 기본값은 "submit"입니다.
 * @param {string} [props.margin=""] - 버튼의 마진(margin) 값. 문자열로 입력받습니다.
 * @param {string} [props.padding=""] - 버튼의 패딩(padding) 값. 문자열로 입력받습니다.
 * @param {string} [props.width=""] - 버튼의 너비(width) 값. 문자열로 입력받습니다.
 * @param {string} [props.height=""] - 버튼의 높이(height) 값. 문자열로 입력받습니다.
 * @param {string} [props.textsize=""] - 버튼의 폰트 사이즈(textsize) 값. "sm" 또는 "lg"로 입력받습니다.
 * @param {string} [props.font=""] - 버튼의 폰트 굵기(text-weight) 값. "semibold" 또는 "bold"로 입력받습니다.
 * @param {string} [props.color=""] - 버튼의 색상(color) 값. "transparent", "yellow", "black" 중 하나로 입력받습니다.
 * @param {string} [props.radius=""] - 버튼의 테두리 반지름(radius) 값. 기본값은 ""입니다.
 * @param {boolean} [props.before=false] - 로그인(로그아웃) 버튼의 왼쪽에 구분선을 표시할지 여부. 기본값은 false입니다.
 * @param {boolean} [props.disabled=false] - 버튼의 사용가능 여부. 기본값은 false입니다.
 * @param {Function} [props.onClick=() => {}] - 버튼 클릭 시 호출되는 콜백 함수. 기본값은 빈 함수입니다.
 * @returns {JSX.Element} Button 컴포넌트의 JSX 요소.
 */
export default function Button({
  children,
  className,
  type,
  margin,
  padding,
  width,
  height,
  textsize,
  font,
  color,
  radius = "",
  before = false,
  border = "border-none",
  disabled = false,
  onClick = () => {},
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`shrink-0 outline-none ${className} ${padding} ${margin} ${width} ${height} ${
        TEXTSIZE[textsize]
      } ${FONTWEIGHT[font]} ${COLOR[color]} ${RADIUS[radius]} ${
        before ? beforeContentStyle : ""
      } ${border}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
