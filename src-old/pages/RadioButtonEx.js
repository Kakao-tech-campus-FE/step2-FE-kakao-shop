import React, { useState } from 'react';
import '../styles/RadioButtonEx.css';
import RadioButton from "../components/RadioButton";

const RadioButtonEx = () => {
    const options = ['닥터페퍼 제로', '코카콜라 제로', '환타 제로'];
    const [selectedOption, setSelectedOption] = useState([]);

    const handleOptionChange = (option) => {
        console.log(option, '을(를) 선택했습니다.');
        setSelectedOption(option);
    };

    return (
        <div>
            <h2>라디오버튼</h2>
            <RadioButton
                options={options}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
            />
            <p>선택한 옵션: {selectedOption}</p>
        </div>
    );
}

export default RadioButtonEx;
