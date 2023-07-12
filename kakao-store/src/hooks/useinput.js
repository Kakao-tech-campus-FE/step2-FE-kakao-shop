import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setValue((prev) => ({ ...prev, [name]: value })); //이렇게 쓰는게 더 좋음
  };

  return { value, handleOnChange };
  // 배열과 객체의 차이는
  // 배열은 순서가 정해져 있음, 필요하지 않는 값도 불러옴
  // 객체는 순서가 없음, 필요한 값만 불러옴
}

export default useInput;