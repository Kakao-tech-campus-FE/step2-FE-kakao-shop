import {useEffect, useState} from "react";

const useInput = (initialValue = null) => {

    const [value, setValue] = useState(initialValue)
    const handOnChange = (e) => {
        const {name, prev} = e.target;
        // override하는 것이 좋다, 이전 값과 분리
        setValue((prev) => ({ ...prev, [name]: value }))
    };

    useEffect(() => {
        console.log(value)
    }, [value])

    return {value, handOnChange}
}

export default useInput;