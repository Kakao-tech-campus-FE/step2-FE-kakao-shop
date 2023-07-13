import { useState } from "react";
const initialCheckBoxs = [
  {value: "원"},
  {value: "투"},
  {value: "쓰리"},
]
const CheckBox = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [checkBoxs, setCheckBoxs] = useState(initialCheckBoxs);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
    }
  };

  const addNewBox = () => {
    if(inputValue !== '') {
      const newBox = {value:inputValue};
      setCheckBoxs([...checkBoxs, newBox]);
      setInputValue('');
    }
  }

  return (
    <div>
      <h1>Checkbox</h1>
      {
        checkBoxs.map((box, index) => (
          <label key={index}>
            <input 
            type="checkbox"
            value={box.value}
            checked={selectedOptions.includes(box.value)}
            onChange={handleCheckboxChange}
            />
            {box.value}
          </label>
        ))
      }
      <div>
        {selectedOptions.map((selectedOption, index) => <span key={index} style={{marginRight:"10px"}}>{selectedOption}</span>)} 선택됨
      </div>

      <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
      <button onClick={addNewBox}>체크박스 추가</button>
      </div>
    </div>
  );
}
export default CheckBox;