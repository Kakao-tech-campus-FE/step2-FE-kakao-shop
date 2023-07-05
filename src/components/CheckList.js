// 상태 추적을 useEffect를 사용하여 console.log에 표시되도록 함
// ID를 인덱스로 하다보니 App 페이지에 컴포넌트를 몰아넣었을 때 문제가 좀 있어서
// 동작만 하도록 고치다 보니 좀 지저분해졌습니다..

// package
import { useState, useEffect } from "react";

// css
import "../styles/CheckList.css";

export default function CheckList({ list }) {
  const [checkedIndex, setCheckedIndex] = useState([]);

  const handleClick = (e) => {
    if (e.target.checked) {
      setCheckedIndex([...checkedIndex, Number(e.target.id.toString().substring(1))]);
    } else {
      setCheckedIndex(checkedIndex.filter((id) => id !== Number(e.target.id.toString().substring(1))));
    }
  };

  useEffect(() => {
    console.log(checkedIndex);
  }, [checkedIndex]);

  return (
    <div>
      {list.map((check, index) => (
        <div>
          <input id={"c"+index} type="checkbox" onClick={handleClick} />
          <label htmlFor={"c"+index}>{check}</label>
        </div>
      ))}
    </div>
  );
}
