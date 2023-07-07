import './Toggle.module.css';
import React, { useState  } from "react";

function Toggle({ defaultValue=true }) {
    const [toggleOn, setToggleOn] = useState(defaultValue);

    return (
        <>
            <div className={`toggle-container ${toggleOn ? "toggle-on" : ""}`} onClick={() => {setToggleOn(!toggleOn);}}>
                <div className={`toggle-circle ${toggleOn ? "toggle-on" : ""}`}></div>
            </div>
            {toggleOn ? "ON" : "OFF"}
        </>
    );
}

export default Toggle;