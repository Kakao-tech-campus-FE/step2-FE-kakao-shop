import { useState } from "react";


const useInput = (initialV) => {
  const [value, setValue] = useState(initialV);

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return {value, handleOnChange};
};

export default useInput;