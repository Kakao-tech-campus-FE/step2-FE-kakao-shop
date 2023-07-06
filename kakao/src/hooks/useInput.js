import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // setValue({ ...value, [name]: value });
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  return { value, handleOnChange };
};

export default useInput;
