import React, { useState } from "react";

import "../../styles/Radiobutton.css";

const Radiobutton = () => {

    const [select, setSelect] = useState("1");

    // 해당 input의 선택지에 해당하는 값으로 select 값을 세팅한다.
    const selectHandler = (event) => {
        setSelect(event.target.value);
        console.log(event.target.value);
    };

    // label로 감싸면 텍스트 클릭시에도 해당 선택지 check 가능
    return (
    <>
        <div>
            <label>
                <input
                type="radio"
                value="1"
                checked={select === "1"}
                onChange={selectHandler}
                />
                1번 선택지입니다.
            </label>

            <br />

            <label>
                <input
                type="radio"
                value="2"
                checked={select === "2"}
                onChange={selectHandler}
                />
                2번 선택지입니다.
            </label>

            <br />

            <label>
                <input
                type="radio"
                value="3"
                checked={select === "3"}
                onChange={selectHandler}
                />
                3번 선택지입니다.
            </label>
        </div>
        <p>{`현재 선택된 선택지는 ${select}번!`}</p>
    </>
    );
};

export default Radiobutton;
