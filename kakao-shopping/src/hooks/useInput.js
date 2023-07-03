import { useState } from "react";

const useInput = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  return [values, handleOnChange];
};

export default useInput;
