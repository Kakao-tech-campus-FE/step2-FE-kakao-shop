import { useState } from "react"

// 사용할 때 인자로 초기값을 꼭 넘겨줘야함  
const useInput = (initalValue) => {
    // 호출되면 별도의 useState를 하나 만듬 
    const [value, setValue] = useState(initalValue)


    //onChagne 메서드에 대해 일관적인 훅을 만들고 싶음.
    const handleOnChange = (e) =>{
        const {name, value} = e.target
        setValue({...value, [name]:value })
    }

    // return 방법 2가지
    // 1.배열 - 순서가 필요함
    // 2.객체 -> 추천
    return {value, handleOnChange}
}

export default useInput;