import { useState } from 'react';
import './checklist.css';

const Checklist = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const handleCheck = (checked, id) => {
        if (checked) {
            setCheckedItems((prev) => [...prev, id]);
        } else {
            setCheckedItems((prev) => prev.filter((e) => e !== id));
        }
    };

    return (
        <div className="Checklist">
            <h2>Checklist</h2>
            <div className="check-container">
                <h3>{data.title}</h3>
                {data?.labels.map((label, key) => (
                    <label key={key} className="check-item">
                        <input
                            type={'checkbox'}
                            name={data.title}
                            checked={checkedItems.includes(key) ? true : false}
                            onChange={(e) => handleCheck(e.target.checked, key)}
                        />
                        {label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Checklist;
