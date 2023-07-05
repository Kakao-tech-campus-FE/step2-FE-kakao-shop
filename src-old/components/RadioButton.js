import React from 'react';

const RadioButton = ({ options, selectedOption, onChange }) => {
    const handleOptionChange = (event) => {
        const option = event.target.value;
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div className="radiobutton">
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
