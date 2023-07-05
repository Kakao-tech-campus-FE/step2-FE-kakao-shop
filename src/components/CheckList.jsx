import React, { useState, useEffect } from 'react';

const CheckList = () => {
  const checklist = [
    { id: 1, value: "check 1" },
    { id: 2, value: "check 2" },
    { id: 3, value: "check 3" },
    { id: 4, value: "check 4" }
  ];
  
  // useState로 체크된 id 값을 관리합니다.
  const [checked, setChecked] = useState([]);

  // useEffect를 사용하여 체크된 id가 변경될 때마다 localStorage에 저장합니다.
  useEffect(() => {
    window.localStorage.setItem("checkedItems", JSON.stringify(checked));
  }, [checked]);

  const handleChange = (event, id) => {
    // 체크박스가 선택되었는지 확인하고, 선택되었다면 해당 id를 checked 배열에 추가하고,
    // 선택이 해제되었다면 해당 id를 checked 배열에서 제거합니다.
    if (event.target.checked) {
      setChecked([...checked, id]);
    } else {
      setChecked(checked.filter((item) => item !== id));
    }
  };

  return (
    <>
      <h1>Check List</h1>
      {/* checklist를 순회하며 체크 박스를 렌더링합니다. */}
      {checklist.map((item) => (
        <div key={item.id}>
          <label>
            {item.value}
            <input
              type="checkbox"
              checked={checked.includes(item.id)}
              onChange={(event) => handleChange(event, item.id)}
            />
          </label>
        </div>
      ))}
    </>
  );
};

export default CheckList;
