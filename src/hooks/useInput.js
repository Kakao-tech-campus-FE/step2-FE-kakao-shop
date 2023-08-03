import { useState } from "react";

const useInput = (initailValue) => {
  const [value, setValue] = useState(initailValue);

  const handleOnChange = (e) => {
    const {name, value} = e.target; // name 속성이 없다면 id를 받는다
    setValue((prev) => ({...prev, [name]: value}));
  };

  return {value, handleOnChange};
};

export default useInput;