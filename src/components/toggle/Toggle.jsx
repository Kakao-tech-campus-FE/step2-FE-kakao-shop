import { useState } from 'react';
import './toggle.css';

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="Toggle" onClick={handleToggle}>
            <h2>Toggle</h2>
            <div className={`toggle-container ${isChecked ? 'toggle-checked' : null}`}>
                <div className={`toggle-circle ${isChecked ? 'toggle-checked' : null}`} />
            </div>
        </div>
    );
};

export default Toggle;
