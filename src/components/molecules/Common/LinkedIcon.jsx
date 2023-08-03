import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon";

const staticServerUri = process.env.REACT_APP_PATH || "";

/**
 * @description LinkedIcon 컴포넌트
 *
 * @param {object} props - LinkedIcon 컴포넌트의 속성(props).
 * @param {React.ReactNode} props.children - LinkedIcon 내부의 자식 요소(children).
 * @param {string} [props.to=""] - 이동경로의 값. 문자열로 입력받습니다.
 * @param {string} [props.alt=""] - 이미지의 대채 텍스트 값. 문자열로 입력받습니다.
 * @param {string} [props.width=""] - 아이콘의 너비 값. 문자열로 입력받습니다.
 * @param {Function} [props.onClick=() => {}] - 클릭 시 호출되는 콜백 함수. 기본값은 빈 함수입니다.
 * @returns {JSX.Element} LinkedIcon 컴포넌트의 JSX 요소.
 */
export default function LinkedIcon({
  children,
  to,
  alt,
  width,
  onClick = () => {},
}) {
  return (
    <Link to={to} className="p-2" onClick={onClick}>
      <Icon alt={alt} width={width}>
        {children}
      </Icon>
    </Link>
  );
}
