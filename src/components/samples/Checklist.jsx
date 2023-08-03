import React, { useState } from "react";

const Checklist = () => {
  const [checkedList, setCheckedList] = useState([]);

  const checkedListHandler = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // useState의 set함수에서는 이전 상태값이 자동으로 전달됨 - 상태변환
    if (isChecked) {
      setCheckedList((prevCheckedList) => [...prevCheckedList, value]);
    } else {
      setCheckedList((prevCheckedList) =>
        // setCheckedList의 값 중에 value와 같지 않은 요소들만 반환함
        prevCheckedList.filter((item) => item !== value)
      );
    }
  };

  return (
    <>
      <label>
        <input type="checkbox" value="1" onChange={checkedListHandler} />
        Option 1
      </label>
      <label>
        <input type="checkbox" value="2" onChange={checkedListHandler} />
        Option 2
      </label>
      <label>
        <input type="checkbox" value="3" onChange={checkedListHandler} />
        Option 3
      </label>
      <label>
        <input type="checkbox" value="4" onChange={checkedListHandler} />
        Option 4
      </label>
      <label>
        <input type="checkbox" value="5" onChange={checkedListHandler} />
        Option 5
      </label>
	  <p>{`지금 체크된 옵션은 -> [ ${checkedList} ]`}</p>
    </>
  );
};

export default Checklist;
