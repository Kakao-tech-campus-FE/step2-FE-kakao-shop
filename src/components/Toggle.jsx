import React, { useState } from "react";
import * as tog from  "../styles/Toggle";

const Toggle = () => {
    const [toggle, setToggle] = useState(false);
    const clickedToggle = () => {
        setToggle(!toggle);
    }
    return(
        <>
            <tog.ToggleBtn onClick={clickedToggle} toggle={toggle}>
                <tog.Circle toggle={toggle} />
            </tog.ToggleBtn>
            <tog.Text>Toggle Switch {toggle ? "ON" : "OFF"}</tog.Text>
        </>
    );
}

export default Toggle;