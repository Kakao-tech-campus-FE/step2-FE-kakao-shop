import { useState } from "react";
import "../styles/togglebutton.css"
import classNames from "classnames";

const ToggleButton = ({getToggle}) => {
    const [toggle, setToggle] = useState(false);
    
    const handleClickToggle = () => {
        setToggle(!toggle);
        getToggle(toggle);
    }

    return (
        <div className="toggle-container">
            <div className={classNames("toggle-track", {checked: toggle})} onClick={handleClickToggle}>
                <div className={classNames("toggle-ball", {checked: toggle})}></div>
            </div>
        </div>
    );
}

export default ToggleButton;