import React from "react";
import { Link } from "react-router-dom";
import Icon from "../atoms/Icon";

/*
 * to: 이동경로 입려을 위한 props
 */
export default function LinkedIcon({ children, to, alt, width }) {
  return (
    <Link to={to} className="p-2">
      <Icon alt={alt} width={width}>
        {children}
      </Icon>
    </Link>
  );
}
