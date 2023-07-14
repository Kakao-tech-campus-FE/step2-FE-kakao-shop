import { useState } from "react";

// Input에 대해서 onChange들을 관리
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return {
    value,
    handleOnChange,
  };
};

export default useInput;
