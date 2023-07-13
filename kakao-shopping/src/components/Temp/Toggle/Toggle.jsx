import React from "react";
import "./Toggle.css";

const Toggle = ({ children, style }) => {
    const [check, setCheck] = React.useState(false);

    const handleCheck = () => {
        setCheck((prev) => !prev);
    };

    return (
        <button
            className={`toggle ${check ? "checked" : ""}`}
            onClick={handleCheck}
            style={style}
        >
            {children}
        </button>
    );
};

export default Toggle;
