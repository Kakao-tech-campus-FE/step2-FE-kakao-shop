import React, { useState } from 'react';
import './RadioButton.css';
/* 
1. onChange prop으로 handleOptionChange 함수를 전달
2. handleOptionChange 함수는 사용자가 라디오 버튼을 클릭할 때마다 실행
3. 선택된 라디오 버튼의 value를 콘솔에 출력
4. useState 훅을 사용하여 선택된 라디오 버튼의 value를 저장
5. useState 훅은 배열을 반환하며, 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 변경하는 함수
6. useState 훅의 인자로는 상태 값의 초기값을 전달
7. setSelectedOption 함수를 사용하여 상태 값을 변경
8. 라디오 버튼의 value와 선택된 라디오 버튼의 value가 일치하면 checked 속성을 true로 설정
*/
const RadioButton = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="radio-button">
      {options.map((option, index) => (
        <label key={index} className="radio-button-label">
          <input
            type="radio"
            value={option.value}
            checked={option.value === selectedOption}
            onChange={() => handleOptionChange(option.value)}
          />
          <span className="radio-button-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
