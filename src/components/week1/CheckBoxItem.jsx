import React, { useState } from "react";

const CheckBoxItem = ({row, handleCheck}) => {
    const [isChecked, setChecked] = useState(false);

    const checkHandler = ({target}) => {
        setChecked(!isChecked);
        handleCheck(row.name, target.checked);
    };

    return(
        <>
            <input type="checkbox" onChange={(e) => checkHandler(e)}/>
        </>
    );
};

export default CheckBoxItem;