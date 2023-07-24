import { useState } from "react";

/**
 * email과 password를 입력받는 input의 value를 onChange로 관리하는 hook
 * @param {object} initialValue { email: "", password: ""}
 * @returns
 */
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
}
