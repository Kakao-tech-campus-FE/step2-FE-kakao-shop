import Radio from "../components/RadioButton/Radio";
import Toggle from "../components/Toggle/Toggle";
import CheckList from "../components/CheckList/CheckList";
import React, { useState } from "react";
import ProcessBar from "../components/ProcessBar/processBar";
import Toast from "../components/Toast/Toast";
import oneGrayCat from "../assets/images/a_gray_cat.png";
import twoGrayCats from "../assets/images/two_gray_cats.jpg";
import manyGrayCats from "../assets/images/cute_gray_cats.jpg";

class CheckListProps {
  static title = "To Do List";
  static item = ["체크리스트 만들기", "css 적용하기", "상태관리 적용하기"];
}

class RadioProps {
  static item = ["one gray cat", "two gray cat", "many gray cat"];
  static URL = [oneGrayCat, twoGrayCats, manyGrayCats];
}

const ComponentTest = () => {
  const [checkedItemNum, setCheckedItemNum] = useState(0);
  const [radioIdx, setRadioIdx] = useState(0);

  return (
    <>
      <Toast />
      <CheckList
        title={CheckListProps.title}
        item={CheckListProps.item}
        checkedItemNum={checkedItemNum}
        setCheckedItemNum={setCheckedItemNum}
      />
      <ProcessBar
        percentage={Math.floor(
          (checkedItemNum / CheckListProps.item.length) * 100
        )}
      />
      <Toggle />
      <Radio radios={RadioProps.item} setRadioIdx={setRadioIdx} />
      <img src={RadioProps.URL[radioIdx]} alt="grayCatPic" />
      <div>컴포넌트 테스트 페이지</div>
    </>
  );
};

export default ComponentTest;
