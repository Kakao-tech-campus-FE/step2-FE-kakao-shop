// 얘가 최종 렌더링될꺼
// 리스트 항목관리(추가, 삭제)

import React, { useState } from "react";
import CheckListItem from "./CheckListItem";

const CheckList = (props) => {
  // 초기값 아이템 리스트
  const [items, setItems] = useState([
    {
      contents: "데일리스크럼",
      checked: false,
    },
    {
      contents: "모각코",
      checked: true,
    },
  ]);
  const [newItem, setNewItem] = useState("");

  //리스트 체크! 배열의 각 요소인 data와 인덱스 i에 대해 함수 실행
  // 현재 요소의 인덱스와 idx가 일치하면 기존요소의 모든 속성복사, checked속성의 값을 현재의 반대로 전환, 아니면 그대로
  const checkItem = (idx) => {
    setItems(
      items.map((data, i) =>
        i == idx ? { ...data, checked: !data.checked } : data
      )
    );
  };

  // 주어진 인덱스에 해당하는 항목 삭제
  // 주어진 인덱스에 해당하는 항목 삭제하고, 나머지는 그대로인 새로운 배열 생성.
  const deleteItem = (idx) => {
    setItems(items.filter((_data, i) => i != idx));
  };

  // 입력한 값 업데이트
  const updateInput = (e) => {
    setNewItem(e.target.value);
  };

  // 입력하고 Enter쳤을때 입력값 체크리스트로 추가, 입력초기화
  const enterInput = ({ key }) => {
    if (key == "Enter") {
      setItems([...items, { contents: newItem, checked: false }]);
      setNewItem("");
      console.log(items);
    }
  };

  return (
    <div className="CheckList">
      <h3>📌 CheckList</h3>
      <ul>
        {items.map(({ contents, checked }, i) => (
          <CheckListItem
            contents={contents}
            checked={checked}
            check={() => checkItem(i)}
            del={() => deleteItem(i)}
          />
        ))}
        {items.length == 0 && (
          <li className="noItems">새로운 체크리스트를 작성해보세요!👀</li>
        )}
      </ul>
      <div className="newItem">
        <input
          type="text"
          placeholder="새로운 리스트 추가 ✏️"
          value={newItem}
          onChange={updateInput}
          onKeyDown={enterInput}
        />
      </div>
    </div>
  );
};
export default CheckList;
