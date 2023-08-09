import React from "react";

const menus = [
  { id: 0, text: "고객센터" },
  { id: 1, text: "이용약관" },
  { id: 2, text: "개인정보처리방침" },
  { id: 3, text: "지식재산권보호센터" },
  { id: 4, text: "안전거래센터" },
];

const beforeContentStyle =
  "relative before:absolute before:top-0 before:bottom-0 before:-left-3 before:my-auto before:content-[''] before:w-before before:h-3 before:bg-gray-400";

export default function Menus() {
  return (
    <ul className="absolute top-8 right-8 flex gap-6">
      {menus.map((menu, index) => (
        <li key={menu.id} className={index !== 0 ? beforeContentStyle : ""}>
          <span
            className={`text-[13px] text-gray-700 ${
              menu.id === 2 ? "font-bold" : ""
            }`}
          >
            {menu.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
