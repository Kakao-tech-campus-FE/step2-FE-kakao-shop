import React from "react";
import Box from "../../atoms/Box";
import CheckBox from "../../molecules/Common/CheckBox";

export default function CheckList({
  checkboxData,
  checkedList,
  onAllChange,
  onChange,
}) {
  return (
    <>
      <Box className="px-5 py-3 text-lg font-extrabold border-b">
        <CheckBox
          size="w-5 h-5"
          checked={checkedList.length === checkboxData.length}
          onChange={(e) => onAllChange(!e.target.checked)}
        >
          전체 동의하기
        </CheckBox>
      </Box>
      <ul className="flex flex-col gap-3 p-5 text-[15px] border-b">
        {checkboxData.map((list) => (
          <li key={list.id}>
            <CheckBox
              size="w-5 h-5"
              checked={checkedList.includes(list)}
              onChange={(e) => onChange(!e.target.checked, list)}
            >
              {list.text}
            </CheckBox>
          </li>
        ))}
      </ul>
    </>
  );
}
