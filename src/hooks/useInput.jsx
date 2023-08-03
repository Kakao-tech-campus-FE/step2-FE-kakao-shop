import { useState, useEffect } from "react";


const useInput = (initialValue) => {
    const [valueInit, setValue] = useState(initialValue);
    const handleOnChange = (e) => {
        const { id, value } = e.target;
        setValue({ ...valueInit, [id]: value });
    }
    useEffect((e) => {
        // console.log(valueInit.password);
    }, [valueInit]);
    return { valueInit, handleOnChange };
};

export default useInput;

//호출될때마다 useState 호출하고,,name 에 따라 입력된 값들이 각 각 저장됨.
//배열로 export 하면 순서가 정해져버림
//useInput value는 초기값이 유저의 정보인 오브젝트인데,  name에 해당하는 키값의 value를 
//입력값에 따라 바꾸고 value 수정하는기능


//중복검사를 해주세요-> useFetch로
// 중복검사 후 true false -> 
//커스텀훅으로 상태 정규식 통과 하면 true 안하면 false 로 바뀌고, 
//각 