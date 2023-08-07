import { useState } from 'react';
let counter = 1;
const initialRadioButtons = [
  {value: "원", index: counter++},
  {value: "투", index: counter++},
  {value: "쓰리", index: counter++},
]
function RadioButton() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0); //동일한 value의 라디오 버튼이 다중선택되지 않도록 index를 기준으로 선택
  const [radioButtons, setRadioButtons] = useState(initialRadioButtons);
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (event, index) => {
    setSelectedOption(event.target.value);
    setSelectedIndex(index);
  };
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addNewButton = () => {
    if (inputValue !== '') {
      const newButton = { value: inputValue, index: counter++ };
      setRadioButtons([...radioButtons, newButton]);
      setInputValue('');
    }
  };

  return (
    <div style={{marginTop:"20px"}}>
      <h1>Radio</h1>
      {radioButtons.map((radioButton) => (
          <label key={radioButton.index}>
            <input 
              type="radio"
              value={radioButton.value}
              checked={selectedIndex === radioButton.index}
              onChange={(event) => handleOptionChange(event, radioButton.index)}/>
            {radioButton.value}
          </label>
      ))}
      <div>
      {selectedOption}을(를) 선택하셨습니다.
      </div>
      <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
      <button onClick={addNewButton}>라디오 버튼 추가</button>
      </div>
    </div>
  );
}

export default RadioButton;