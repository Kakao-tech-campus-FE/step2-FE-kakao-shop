import React, { useState } from 'react';
import '../styles/ChecklistEx.css';
import Checklist from "../components/Checklist";

const ChecklistEx = () => {
    const options = ['닥터페퍼 제로', '코카콜라 제로', '환타 제로'];
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleCheckboxChange = (label, checked) => {
        const updatedCheckboxes = checked
            ? [...selectedCheckboxes, label]
            : selectedCheckboxes.filter(item => item !== label);

        const sortedCheckboxes = updatedCheckboxes.sort((a, b) => a.localeCompare(b));
        setSelectedCheckboxes(sortedCheckboxes);
        //console.log(`${updatedCheckboxes.join(', ')}을(를) 선택했습니다.`);
        console.log(`${label}이(가) ${checked ? '체크되었습니다.' : '체크 해제되었습니다.'}`);
    };

    return (
        <div>
            <h2>체크리스트</h2>
            {options.map((option, index) => (
                <Checklist
                    key={index}
                    label={option}
                    onChange={handleCheckboxChange}
                />
            ))}
            <div>
                선택한 옵션: {selectedCheckboxes.join(', ')}
            </div>
        </div>
    );
};

export default ChecklistEx;
