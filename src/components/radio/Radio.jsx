import { useState } from 'react';
import './radio.css';

const Radio = ({ data }) => {
    const [checkedItem, setCheckedItem] = useState(null);
    const handleRadio = (checked, id) => {
        if (checked) {
            setCheckedItem(id);
        } else {
            setCheckedItem(null);
        }
    };

    return (
        <div className="Radio">
            <h2>Radio Button</h2>
            <h3>{data.title}</h3>
            <div className="radio-container">
                {data?.labels.map((label, key) => (
                    <label key={key} className="radio-item">
                        <input
                            type={'radio'}
                            name={data.title}
                            checked={checkedItem == key ? true : false}
                            onChange={(e) => handleRadio(e.target.checked, key)}
                        />
                        {label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Radio;
