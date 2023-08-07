import { useEffect, useState } from "react";

const RadioButtons = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  // const options = [
  //     {label: "카카오페이머니", value: "kakao-pay-money"},
  //     {label: "카카오페이카드", value: "kakao-pay-card"},
  // ]
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);
  return (
    <div className={"radio-button-container"}>
      {options.map((option) => (
        <label key={option.value} className={"radio-button-label"}>
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
          />
          {option.label}
          <span className={"radio-button"}></span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
