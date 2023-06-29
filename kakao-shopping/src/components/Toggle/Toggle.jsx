import React from 'react'
import './Toggle.css';

const Toggle = ( {children} ) =>  {
    const [check, setCheck] = React.useState(false);

    const handleCheck = () => {
        setCheck((prev) => !prev)
    }

    return (
        <button className={`toggle ${check ? "checked" : ""}`}
            onClick={handleCheck}>
            {children}
        </button>
    );
}

export default Toggle;