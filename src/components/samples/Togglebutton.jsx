import React, { useState } from "react";

import "../../styles/Togglebutton.css"

// 조건부 렌더링을 통해 토글 버튼 기능 구현
const ToggleButton = () => {
    const [toggle, setToggle] = useState(false);

    // useState의 set함수에서는 이전 상태값이 자동으로 전달됨 - 상태변환
    const toggleHandler = () => {
        setToggle((prev) => !prev);
        // console.log(toggle);
    }

    return (
        <>
            <div className={`toggleBox ${toggle ? "toggle--on" : null}`} onClick={toggleHandler} >
                <div className={`toggleBox--circle ${toggle ? "toggle--on" : null}`}></div>
            </div>
            <p>{`현재 토글 상태는 ${toggle}!`}</p>
        </>
    )
}

export default ToggleButton