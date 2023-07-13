import React, { useState } from 'react';

const Checklist = ({ label, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        onChange(label, newChecked);
    };

    return (
        <div className="checklist-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
                id={`checklist-${label}`}
            />
            <label htmlFor={`checklist-${label}`}>{label}</label>
        </div>
    );
};

export default Checklist;
