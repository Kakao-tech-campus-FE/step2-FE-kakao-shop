import React, { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";
import * as check from "../styles/CheckBox";

const checkList = [
    {id: 0, name: '서울'},
    {id: 1, name: '전북'},
    {id: 2, name: '대전'},
    {id: 3, name: '전남'},
    {id: 4, name: '제주'},
];

const Check = () => {
    const [checkItems, setCheckItems] = useState(new Set());

    const handleCheck = (name, isChecked) => {
        const newCheckItems = new Set(checkItems);
        if(isChecked) {
            newCheckItems.add(name);
        } else if(!isChecked && checkItems.has(name)) {
            newCheckItems.delete(name);
        };
        setCheckItems(newCheckItems);
    };

    return(
        <check.Container>
            <check.Head>CHECKLIST</check.Head>
            <check.ListContainer>
                {checkList.map((row, idx) => (
                    <check.List key={idx}>
                        <label>
                            <CheckBoxItem row={row} handleCheck={handleCheck} />
                            <span>{row.name}</span>
                        </label>
                    </check.List>
                ))}
            </check.ListContainer>
            <check.Desc>{checkItems.size > 0 ? "You Selected " : null} 
                        {[...checkItems].join(", ")}
            </check.Desc>
        </check.Container>
    );
};

export default Check;