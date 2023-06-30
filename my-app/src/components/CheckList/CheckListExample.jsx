import React, { useState } from "react";
import Checkbox from "./Checkbox";
import CheckboxGroup from "./CheckboxGroup";
import { styled } from "styled-components";

const Result = styled.div`
  background-color: pink;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
`;

export default function CheckListExample() {
  // 체크된 목록을 배열로 관리
  const [checkedItems, setCheckedItems] = useState([]);

  return (
    <>
      <CheckboxGroup values={checkedItems} onChange={setCheckedItems}>
        <Checkbox value="1">1번</Checkbox>
        <Checkbox value="2">2번</Checkbox>
        <Checkbox value="3">3번</Checkbox>
      </CheckboxGroup>
      {checkedItems.length !== 0 && (
        <Result>You checked {checkedItems.join(", ")}</Result>
      )}
    </>
  );
}
