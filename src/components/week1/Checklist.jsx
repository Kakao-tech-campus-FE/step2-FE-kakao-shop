import React, { useRef } from 'react';

const Checklist = () => {
  const checkRef = useRef([]); //checklist 상태를 담을 배열로 초기화

  const handleCheckboxChange = (index) => {
    const setChecklist = [...checkRef.current]; 
    setChecklist[index] = !setChecklist[index]; //true false 전환
    checkRef.current = setChecklist;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checklist:', checkRef.current); //현재는 확인만을 위해 출력만 담당.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          checked={checkRef.current[0]} //true fales 전환값 적용
          onChange={() => handleCheckboxChange(0)}
        />
        Option 1
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkRef.current[1]}
          onChange={() => handleCheckboxChange(1)}
        />
        Option 2
      </label>
      <label>
        <input
          type="checkbox"
          checked={checkRef.current[2]}
          onChange={() => handleCheckboxChange(2)}
        />
        Option 3
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Checklist;
