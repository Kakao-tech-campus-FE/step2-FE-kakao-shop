import Radio from "../components/RadioButton/Radio";
import Toggle from "../components/Toggle/Toggle";
import CheckList from "../components/CheckList/CheckList";
import React, { useState } from "react";

class CheckListProps {
  static title = "To Do List";
  static item = ["체크리스트 만들기", "css 적용하기", "상태관리 적용하기"];
}

const ComponentTest = () => {
  const [checkedItemNum, setCheckedItemNum] = useState(0);
  console.log(CheckListProps.title);
  return (
    <>
      <CheckList
        title={CheckListProps.title}
        item={CheckListProps.item}
        checkedItemNum={checkedItemNum}
        setCheckedItemNum={setCheckedItemNum}
      />
      <Toggle />
      <Radio />
      <div>컴포넌트 테스트 페이지</div>
    </>
  );
};

export default ComponentTest;
