import React, { useEffect, useState } from "react";
import "./CheckBox.css";
// Q) 전체 동의하기 btn의 State level??
// -> 상위 컴포넌트에서 관리

function CheckBox(props) {
  // !!참고!!
  // 1) React의 컴포넌트 트리에서 props를 통해 함수를 전달할 때, 해당 함수는 동일한 함수 인스턴스를 참조
  // 2) setState: 상태를 업데이트하고 리렌더링 예약(비동기적) -> 바로 상태가 바뀌는게 아님!!(조건 검사시 주의)

  const [checkedItems, setCheckedItems] = useState([]);
  const handleAllChange = () => {
    props.onAllChange((prev) => !prev);
    setCheckedItems(
      props.isAllChecked ? [] : props.options.map((option) => option.value)
    );
  };

  const handleCheckBoxChange = (event) => {
    const isChecked = event.target.checked;
    const checkedItem = event.target.value;
    setCheckedItems((prevCheckedItems) => {
      return isChecked
        ? [...prevCheckedItems, checkedItem]
        : prevCheckedItems.filter((item) => item !== checkedItem);
    });
  };

  // Q) 하나의 상태가 변경되었을 때 연속적으로 상태 조건을 검사하고 변경하는 경우:
  // checkedItems의 상태가 변경되면 isAllchecked상태 역시 검사해야됨
  // -> useEffect Hook
  useEffect(() => {
    props.onAllChange(checkedItems.length === props.options.length);
  }, [checkedItems]);

  return (
    <div className={props.className}>
      <div className="check-label" id="allcheck">
        <input
          type="checkbox"
          id={props.all.value}
          checked={props.isAllChecked}
          onChange={handleAllChange}
          className="check-button"
        />
        <label htmlFor={props.all.value}>{props.all.label}</label>
      </div>
      {props.options.map((option) => (
        <div key={option.value} className="check-label">
          <input
            type="checkbox"
            name={props.className}
            value={option.value}
            id={option.value}
            checked={checkedItems.includes(option.value)}
            onChange={handleCheckBoxChange}
            className="check-button"
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

export default CheckBox;
