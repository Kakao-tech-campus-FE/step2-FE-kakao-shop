import { useState } from "react"

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setValue({...prev, [name]: value})이렇게 바로 사용하는것 보다
    // 아래 코드처럼 overiding하여 사용하는 것이 더 좋다.
    // 에러 발생을 줄이고, arrow func 내에서 prev에 대한 전처리도 가능하기 때문
    setValue((prev) => ({...prev, [name]: value}))
  }

  // return은 배열 [], 객체 {} 어떤 것으로 해도 상관 없으나
  // 객체로 반환하면 순서에 관여받지 않기 때문에 객체로 반환하는 것을 추천
  return { value, handleOnChange};
}
export default useInput;