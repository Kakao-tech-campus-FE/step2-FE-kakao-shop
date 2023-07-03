import React from "react";
import { NavLink } from "react-router-dom";

const pathName = {
  home: "/",
  products: "/products",
  productDetail: "/products/productDetail",
};

export default function Path({ text }) {
  return (
    <li>
      <NavLink
        to={pathName[text]}
        className={`mr-2 before:content-['>'] before:mr-2 ${
          text === "home" ? "before:content-none" : ""
        }`}
        style={({ isActive }) => (isActive ? { color: "#2463eb" } : undefined)}
        end
      >
        {text}
      </NavLink>
    </li>
  );
}
