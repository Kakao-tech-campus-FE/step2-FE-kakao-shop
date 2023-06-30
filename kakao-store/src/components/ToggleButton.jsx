import { useState } from "react";

const ToggleButton = ({getToggle}) => {
    const [toggle, setToggle] = useState(false);
    
    const handleClickToggle = (e) => {
        // e.preventDefault();
        setToggle(!toggle);

        getToggle(toggle);
    }

    return (
        <div className="toggle-container">
            <input className="toggle-checkbox" type="checkbox" onClick={handleClickToggle}/>
            <div className="toggle-track">
                <div className="toggle-ball"></div>
            </div>
        </div>
    );
}

export default ToggleButton;