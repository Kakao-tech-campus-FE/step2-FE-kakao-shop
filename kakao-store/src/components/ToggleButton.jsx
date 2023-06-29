import { useState } from "react";

const ToggleButton = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="toggle-container">
            <input className="toggle-checkbox" type="checkbox" />
            <div className="toggle-track">
                <div className="toggle-ball"></div>
            </div>
        </div>
    );
}

export default ToggleButton;