import '../styles/Toggle.css';
import React, { useState, useEffect, useRef } from "react";

function Toggle() {
    const [toggleOn, setToggleOn] = useState(true);
    const toggleRef = useRef();
    
    useEffect(() => {
        console.log("toggle effect");
    }, [toggleOn]);

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